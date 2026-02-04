<template>
    <div class="ff-panel-container" :class="variant">
        <!-- Corner decorations -->
        <div v-if="!noCorners" class="panel-corners">
            <div class="corner tl"></div>
            <div class="corner tr"></div>
            <div class="corner bl"></div>
            <div class="corner br"></div>
        </div>
        
        <!-- Header slot -->
        <header v-if="$slots.header" class="panel-header">
            <slot name="header"></slot>
        </header>
        
        <!-- Main content -->
        <div class="panel-content">
            <slot></slot>
        </div>
        
        <!-- Footer slot -->
        <footer v-if="$slots.footer" class="panel-footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script setup lang="ts">
interface Props {
    variant?: 'primary' | 'secondary' | 'accent';
    noCorners?: boolean;
}

withDefaults(defineProps<Props>(), {
    variant: 'primary',
    noCorners: false
});
</script>

<style scoped>
.ff-panel-container {
    position: relative;
    background: var(--gradient-panel);
    border: 2px solid rgba(212, 175, 55, 0.3);
    border-radius: 8px;
    box-shadow: var(--shadow-md);
    overflow: hidden;
    clip-path: polygon(
        12px 0, 100% 0, 
        100% calc(100% - 12px), 
        calc(100% - 12px) 100%, 
        0 100%, 
        0 12px
    );
}

.ff-panel-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--gradient-gold);
    opacity: 0.5;
    z-index: 1;
}

/* Variants */
.ff-panel-container.secondary {
    background: linear-gradient(145deg, #252b45 0%, #1a1f35 100%);
}

.ff-panel-container.accent {
    border-color: var(--color-accent-purple);
}

.ff-panel-container.accent::before {
    background: linear-gradient(90deg, 
        var(--color-accent-blue), 
        var(--color-accent-purple), 
        var(--color-accent-blue));
}

/* Corner decorations */
.panel-corners {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 2;
}

.corner {
    position: absolute;
    width: 24px;
    height: 24px;
    border: 2px solid var(--color-accent-gold);
}

.corner::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--color-accent-gold);
    box-shadow: 0 0 8px var(--color-accent-gold);
}

.tl {
    top: 8px;
    left: 8px;
    border-right: none;
    border-bottom: none;
}

.tl::after {
    top: -2px;
    left: -2px;
}

.tr {
    top: 8px;
    right: 8px;
    border-left: none;
    border-bottom: none;
}

.tr::after {
    top: -2px;
    right: -2px;
}

.bl {
    bottom: 8px;
    left: 8px;
    border-right: none;
    border-top: none;
}

.bl::after {
    bottom: -2px;
    left: -2px;
}

.br {
    bottom: 8px;
    right: 8px;
    border-left: none;
    border-top: none;
}

.br::after {
    bottom: -2px;
    right: -2px;
}

/* Header */
.panel-header {
    position: relative;
    padding: 1.5rem 2rem;
    border-bottom: 2px solid rgba(212, 175, 55, 0.2);
    background: linear-gradient(180deg, rgba(74, 123, 167, 0.1) 0%, transparent 100%);
    z-index: 1;
}

/* Content */
.panel-content {
    position: relative;
    padding: 1.5rem 2rem;
    z-index: 1;
}

/* Footer */
.panel-footer {
    position: relative;
    padding: 1.5rem 2rem;
    border-top: 2px solid rgba(212, 175, 55, 0.2);
    background: linear-gradient(0deg, rgba(74, 123, 167, 0.1) 0%, transparent 100%);
    z-index: 1;
}
</style>
