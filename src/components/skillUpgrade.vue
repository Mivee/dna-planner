<template>
	<div class="flex flex-row gap-4 items-center">
		{{ props.talentName }}
		<input
			placeholder="current skill level"
			v-model="skill.current"
			type="number"
			:max="MAX_SKILL_LEVEL"
			min="0"
			:id="talentName + ' current skill'"
			class="w-16" />
		<input
			placeholder="target skill level"
			v-model="skill.target"
			type="number"
			:max="MAX_SKILL_LEVEL"
			min="0"
			:id="talentName + ' target skill'"
			class="w-16" />

		<!-- node 1 -->
		<label :for="talentName + ' node 1 isunlocked'">Unlock Node 1?</label>
		<input
			type="checkbox"
			v-model="skill.node1.isUnlocked"
			:disabled="skill.target < MIN_SKILL_LEVEL_FOR_NODE"
			:id="talentName + ' node 1 isunlocked'" />

		<!-- node 2 -->
		<label :for="talentName + ' node2 isunlocked'">Unlock Node 2?</label>
		<input
			type="checkbox"
			v-model="skill.node2.isUnlocked"
			:disabled="skill.target < MIN_SKILL_LEVEL_FOR_NODE"
			:id="talentName + ' node2 isunlocked'" />
	</div>
</template>
<script setup lang="ts">
import { watch } from "vue";
import type { SkillUpgradeConfig } from "../types/upgradeConfig";
import {
	MAX_SKILL_LEVEL,
	MIN_SKILL_LEVEL_FOR_NODE,
} from "../definitions/constants";

interface Props {
	talentName: string;
	skill: SkillUpgradeConfig;
}
const props = defineProps<Props>();
const emit = defineEmits(["update:skill"]);
watch(props.skill, (n) => {
	n.current = Math.min(n.current, MAX_SKILL_LEVEL);
	n.target = Math.min(n.target, MAX_SKILL_LEVEL);
	emit("update:skill", n);
});
</script>
