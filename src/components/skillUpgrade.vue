<template>
    <div class="flex flex-row gap-4">
        {{ props.talentName }}
        <input placeholder="current skill level" v-model="skill.current" type="number" max="10"
            :id="talentName + ' current skill'" class="w-16" />
        <input placeholder="target skill level" v-model="skill.target" type="number" max="10" 1
            :id="talentName + ' target skill'" class="w-16" />

        <!-- node 1 -->
        <label :for="talentName + ' node 1 isunlocked'">Unlock Node 1?</label>
        <input type="checkbox" v-model="skill.node1.isUnlocked" :id="talentName + ' node 1 isunlocked'" />

        <!-- node 2 -->
        <label :for="talentName + ' node2 isunlocked'">Unlock Node 2?</label>
        <input type="checkbox" v-model="skill.node2.isUnlocked" :id="talentName + ' node2 isunlocked'" />
    </div>
</template>
<script setup lang="ts">
import { watch } from 'vue';
import type { SkillUpgradeConfig } from '../types/upgradeConfig';

interface Props {
    talentName: string
    skill: SkillUpgradeConfig
}
const props = defineProps<Props>();
const emit = defineEmits(["update:skill"]);
watch(props.skill, (n) => emit("update:skill", n))
</script>