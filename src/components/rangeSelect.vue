<template>

    <select v-model="internalRange.start" :class="selectClasses">
        <option v-for="o in props.options">
            {{ o }}
        </option>
    </select>

    <select v-model="internalRange.end" :class="selectClasses">
        <option v-for="o in props.options">
            {{ o }}
        </option>
    </select>


</template>
<script lang="ts" setup generic="T">
import { watch, ref, computed } from 'vue';
import type { Range } from '../types/range';

interface Props {
    options: T[];
    range: Range<T>
    selectColor?: "Primary" | "Secondary"
    selectText?: "Primary" | "Secondary"
}
const props = defineProps<Props>();

const selectClasses = computed(() => {
    const classes: Array<string> = [];
    if (props.selectColor == "Primary") {
        classes.push("bg-primary");
    }
    else if (props.selectColor == "Secondary") {
        classes.push("bg-secondary")
    }

    if (props.selectText == "Primary") {
        classes.push("text-on-primary")

    } else if (props.selectText == "Secondary") {
        classes.push("text-on-secondary")
    }
    return classes;
})

const emit = defineEmits(["update:range"]);

const internalRange = ref(props.range);
watch(internalRange, n => emit("update:range", n), { deep: true })

</script>