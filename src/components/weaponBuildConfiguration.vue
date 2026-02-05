<template>
        <Modal v-model:is-open="isOpen" @save="save" @closed="emit('closed')">
        <div class="p-6">
            <h2 class="text-2xl font-bold text-on-primary mb-6">Add Weapon</h2>
            
            <div class="flex flex-col gap-4">
                <div>
                    <label class="block text-sm font-medium text-on-secondary mb-2">Weapon</label>
                    <select v-model="config.name" class="w-full px-4 py-2 bg-tertiary border border-white/10 rounded-md text-on-primary">
                        <option value="">Select a weapon</option>
                        <option v-for="weapon in weapons" :key="weapon.name" :value="weapon.name">
                            {{ weapon.name }}
                        </option>
                    </select>
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-on-secondary mb-2">Level Range</label>
                    <RangeSelect v-model:range="config.level" :options="weaponsLevels" />
                </div>
                
                <div class="flex gap-3 mt-4">
                    <button @click="save" class="flex-1">Save</button>
                    <button @click="emit('closed')" class="flex-1 bg-white/5">Cancel</button>
                </div>
            </div>
        </div>
    </Modal>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import type { WeaponUpgradeConfig } from '../types/upgradeConfig';
import { weapons, weaponLevelingMaterials } from '../definitions/weapon';
import RangeSelect from './rangeSelect.vue';
import Modal from './modal.vue';
import { useUiStore } from '../stores/ui';

const emit = defineEmits<{
    saved: []
    closed: []
}>();

const { addConfiguration } = useUiStore();

const weaponsLevels = computed(() => weaponLevelingMaterials.map(x => x.level));
const isOpen = ref(true);
const config = ref<WeaponUpgradeConfig>({
    name: "",
    level: { start: weaponsLevels.value[0], end: weaponsLevels.value[weaponsLevels.value.length - 1] },
    type: "Weapon",
});

function save() {
    if (!config.value.name) {
        alert('Please select a weapon');
        return;
    }
    addConfiguration(config.value);
    emit('saved');
}
</script>
