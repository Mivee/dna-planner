<template>
    <div v-for="value in wedges">
        {{ value.name }}
        <input type="checkbox" v-model="value.done" />
    </div>
</template>
<script lang="ts" setup>
const wedges = [{ name: "inspo", done: false }, { name: "Balaze", done: false }];

</script>