<template>
    <!-- Rounded switch -->
    <span>{{ props.labelInactive }}</span>
    <label class="switch">
        <input type="checkbox" v-model="internalValue">
        <span class="slider round"></span>
    </label>
    <span>{{ props.labelActive }}</span>
</template>
<script setup lang="ts" generic="T">
import { ref, watch } from 'vue';


interface Props {
    value: T,
    labelActive: string;
    labelInactive: string
}
const props = defineProps<Props>();
const internalValue = ref(props.value == props.labelActive);

const emit = defineEmits(["update:value"]);
watch(internalValue, (v) => emit("update:value", v ? props.labelActive : props.labelInactive))

</script>
<style lang="css">
/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: #2196F3;
}

input:focus+.slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>