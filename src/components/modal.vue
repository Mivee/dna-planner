<template>
    <Transition name="modal">
        <div v-if="isOpen" class="modal-overlay" @click.self="close">
            <div class="modal-container">
                <!-- Header -->
                <header class="modal-header">
                    <slot name="header">
                        <h2 class="modal-title">Configuration</h2>
                    </slot>
                    <button class="close-button" @click="close" aria-label="Close modal">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </header>

                <!-- Body -->
                <section class="modal-body">
                    <slot></slot>
                </section>

                <!-- Footer -->
                <footer class="modal-footer">
                    <button class="modal-button primary" @click="save">
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
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(30, 30, 46, 0.85);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
}

.modal-container {
    position: relative;
    background: var(--color-bg-card);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    max-width: 90%;
    max-height: 90vh;
    width: 600px;
    box-shadow: var(--shadow-lg);
    overflow: hidden;
    animation: modalSlideIn 0.2s ease;
}

/* Header */
.modal-header {
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.02);
}

.modal-title {
    margin: 0;
    font-size: 1.25rem;
    color: var(--color-text-primary);
    font-weight: 700;
}

.close-button {
    padding: 0.5rem;
    background: transparent;
    border: none;
    color: var(--color-text-secondary);
    font-size: 1.25rem;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
}

.close-button:hover {
    color: var(--color-text-primary);
    background: rgba(255, 255, 255, 0.1);
}

/* Body */
.modal-body {
    padding: 1.5rem;
    max-height: 60vh;
    overflow-y: auto;
}

/* Footer */
.modal-footer {
    padding: 1.25rem 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    gap: 0.75rem;
    justify-content: flex-end;
    align-items: center;
    background: rgba(255, 255, 255, 0.02);
}

.modal-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

/* Transitions */
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
    transition: all 0.2s ease;
}

.modal-enter-from .modal-container {
    transform: scale(0.95) translateY(-20px);
    opacity: 0;
}

.modal-leave-to .modal-container {
    transform: scale(0.95);
    opacity: 0;
}

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
</style>
