<template>
    <div v-for="value in items">
        {{ value.quantity }}x {{ value.name }}
    </div>
    <button @click="toggleModal">open modal</button>
    <Modal v-if="isModalOpen">
        <template #body>
            <div>select an item</div>
            <div>
                <select v-model="toAdd.name">
                    <option v-for="value in availableItems">
                        {{ value }}
                    </option>
                </select>
                <input type="number" v-model="toAdd.quantity" />
            </div>

            <button @click="addItem(toAdd)">add</button>
        </template>
    </Modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useInventory } from '../stores/inventory';
import Modal from './modal.vue';
import type { InventoryItem } from '../types/inventoryItem';

const { items, addItem } = useInventory();
const availableItems = ["a", "b", "Golden Wool"];
const toAdd: InventoryItem = {
    name: "select an item",
    quantity: 0
}
const isModalOpen = ref(false);

function toggleModal() {
    isModalOpen.value = !isModalOpen.value;
}

</script>