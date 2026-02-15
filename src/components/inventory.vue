<template>
    <div class="flex flex-col gap-4">
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold text-on-primary m-0">
                <i class="fas fa-box mr-2 text-accent"></i>Inventory
            </h3>
        </div>

        <div class="flex flex-col gap-6 max-h-[60vh] overflow-y-auto pr-2">
            <!-- Currency Section -->
            <div>
                <h4 class="text-xs font-semibold text-on-secondary uppercase tracking-wider mb-3">Currency</h4>
                <div class="flex flex-col gap-2">
                    <InventoryMaterial name="Coins" icon-class="fas fa-coins" icon-color="text-accent"
                        :quantity="getItemQuantity('Coins')" @update="updateQuantity" />
                    <InventoryMaterial name="XP" icon-class="fas fa-star" icon-color="text-accent"
                        :quantity="getItemQuantity('XP')" @update="updateQuantity" />
                    <InventoryMaterial name="Weapon XP" icon-class="fas fa-hammer" icon-color="text-accent"
                        :quantity="getItemQuantity('Weapon XP')" @update="updateQuantity" />
                </div>
            </div>

            <!-- Carmine Globules -->
            <div>
                <h4 class="text-xs font-semibold text-on-secondary uppercase tracking-wider mb-3">Daemon Wedge Materials
                </h4>
                <div class="flex flex-col gap-2">
                    <InventoryMaterial name="Carmine Globules" icon-class="fas fa-gem" icon-color="text-purple-400"
                        :quantity="getItemQuantity('Carmine Globules')" @update="updateQuantity" />
                </div>
            </div>

            <!-- Ascension Materials -->
            <div v-if="ascensionMaterialNames.length > 0">
                <h4 class="text-xs font-semibold text-on-secondary uppercase tracking-wider mb-3">Ascension Materials
                </h4>
                <div class="flex flex-col gap-2">
                    <InventoryMaterial v-for="materialName in ascensionMaterialNames" :key="materialName"
                        :name="materialName" icon-class="fas fa-star" icon-color="text-accent"
                        :quantity="getItemQuantity(materialName)" @update="updateQuantity" />
                </div>
            </div>

            <!-- Forging Materials -->
            <div v-if="forgingMaterialNames.length > 0">
                <h4 class="text-xs font-semibold text-on-secondary uppercase tracking-wider mb-3">Forging Materials</h4>
                <div class="flex flex-col gap-2">
                    <InventoryMaterial v-for="materialName in forgingMaterialNames" :key="materialName"
                        :name="materialName" icon-class="fas fa-hammer" icon-color="text-accent"
                        :quantity="getItemQuantity(materialName)" @update="updateQuantity" />
                </div>
            </div>

            <!-- All other tracked materials from inventory -->
            <div v-if="otherItems.length > 0">
                <h4 class="text-xs font-semibold text-on-secondary uppercase tracking-wider mb-3">Other Materials</h4>
                <div class="flex flex-col gap-2">
                    <InventoryMaterial v-for="item in otherItems" :key="item.name" :name="item.name"
                        :quantity="item.quantity" @update="updateQuantity" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useInventory } from '../stores/inventory';
import { elementUpgradeMaterials } from '../definitions/character';
import { weaponUpgradeMaterials } from '../definitions/weapon';
import InventoryMaterial from './inventoryMaterial.vue';

const inventoryStore = useInventory();

// Get all unique ascension material names from character and weapon definitions
const ascensionMaterialNames = computed(() => {
    const materials = new Set<string>();

    // Character ascension materials
    elementUpgradeMaterials.forEach(elem => {
        materials.add(elem.ascensionMaterials.t1);
        materials.add(elem.ascensionMaterials.t2);
        materials.add(elem.ascensionMaterials.t3);
    });

    // Weapon ascension materials
    weaponUpgradeMaterials.forEach(weapon => {
        materials.add(weapon.ascensionMaterials.primary);
        materials.add(weapon.ascensionMaterials.secondary);
    });

    return Array.from(materials).sort();
});

// Get all unique forging material names from character and weapon definitions
const forgingMaterialNames = computed(() => {
    const materials = new Set<string>();

    // Character forging materials
    elementUpgradeMaterials.forEach(elem => {
        materials.add(elem.forgingMaterials.t1);
        materials.add(elem.forgingMaterials.t2);
        materials.add(elem.forgingMaterials.t3);
        materials.add(elem.forgingMaterials.t4);
    });

    // Weapon forging materials
    weaponUpgradeMaterials.forEach(weapon => {
        materials.add(weapon.forgingMaterials.t1);
        materials.add(weapon.forgingMaterials.t2);
    });

    return Array.from(materials).sort();
});

const knownItems = computed(() => {
    const items = ['Coins', 'XP', 'Weapon XP', 'Carmine Globules'];
    return [...items, ...ascensionMaterialNames.value, ...forgingMaterialNames.value];
});

const otherItems = computed(() => {
    return inventoryStore.items.filter(item => !knownItems.value.includes(item.name));
});

function getItemQuantity(name: string): number {
    return inventoryStore.getAmount(name);
}

function updateQuantity(name: string, quantity: number) {
    // Check if item exists in inventory
    const exists = inventoryStore.items.some(item => item.name === name);

    if (!exists && quantity > 0) {
        // Add new item
        inventoryStore.addItem({ name, quantity });
    } else if (exists) {
        // Update existing item
        inventoryStore.setQuantity(name, quantity);
    }
}
</script>