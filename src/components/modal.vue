<template>
    <div v-if="isOpen" class="fixed inset-0 bg-primary/50 flex items-center justify-center" @click.self="close">
        <div class="bg-secondary text-on-secondary rounded-lgmax-w-[90%] shadow-[0_10px_25px_rgba(0,0,0,0.2)]">
            <!-- Header -->
            <header class="p-4 border-b border-secondary">
                <slot name="header">

                    <!-- Default header can go here -->
                </slot>
                <button class="text-on-secondary text-2xl transition float-right" @click="close">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </header>

            <!-- Body -->
            <section class="p-4">
                <slot></slot>
            </section>

            <!-- Footer -->
            <footer class="flex justify-end items-center gap-2 p-4 border-t border-secondary">
                <button class="px-4 py-2 bg-primary text-on-primary rounded transition" @click="save">
                    Save
                </button>
                <slot name="footer"></slot>
            </footer>
        </div>
    </div>
</template>


<script lang="ts" setup>

interface Props {
    isOpen: boolean;
}
defineProps<Props>();

const emit = defineEmits(["update:isOpen", "save", "closed"]);

function close() {
    emit('update:isOpen', false);
    emit("closed")
}

function save() {
    emit("update:isOpen", false);
    emit("save");
}

</script>
