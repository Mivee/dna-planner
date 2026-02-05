<template>
    <Transition name="modal">
        <div v-if="isOpen" class="fixed inset-0 bg-primary/85 backdrop-blur-sm flex items-center justify-center z-[1000] p-4" @click.self="close">
            <div class="relative bg-secondary border border-white/10 rounded-lg max-w-[90%] max-h-[90vh] w-[600px] shadow-2xl overflow-hidden animate-[modalSlideIn_0.2s_ease]">
                <!-- Header -->
                <header class="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
                    <slot name="header">
                        <h2 class="m-0 text-xl text-on-primary font-bold">Configuration</h2>
                    </slot>
                    <button class="p-2 bg-transparent border-none text-on-secondary text-xl cursor-pointer transition-all duration-200 rounded flex items-center justify-center w-9 h-9 hover:text-on-primary hover:bg-white/10" @click="close" aria-label="Close modal">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </header>

                <!-- Body -->
                <section class="p-6 max-h-[60vh] overflow-y-auto">
                    <slot></slot>
                </section>

                <!-- Footer -->
                <footer class="px-6 py-5 border-t border-white/10 flex gap-3 justify-end items-center bg-white/[0.02]">
                    <button class="flex items-center gap-2" @click="save">
                        <i class="fas fa-save"></i>
                        Save
                    </button>
                    <slot name="footer"></slot>
                </footer>
            </div>
        </div>
    </Transition>
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

<style scoped>
@keyframes modalSlideIn {
    from {
        transform: scale(0.95) translateY(-20px);
        opacity: 0;
    }
    to {
        transform: scale(1) translateY(0);
        opacity: 1;
    }
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-active > div,
.modal-leave-active > div {
    transition: all 0.2s ease;
}

.modal-enter-from > div {
    transform: scale(0.95) translateY(-20px);
    opacity: 0;
}

.modal-leave-to > div {
    transform: scale(0.95);
    opacity: 0;
}
</style>
