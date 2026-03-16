<template>
	<div class="flex flex-row gap-4 items-center">
		<span>{{ props.talentName }}</span>
		<label :for="talentName + ' current skill'" class="sr-only">
			{{ talentName }} current level
		</label>
		<input
			:id="talentName + ' current skill'"
			v-model="internalSkill.current"
			placeholder="current skill level"
			type="number"
			:max="MAX_SKILL_LEVEL"
			min="0"
			:aria-label="talentName + ' current level'"
			class="w-16" />
		<label :for="talentName + ' target skill'" class="sr-only">
			{{ talentName }} target level
		</label>
		<input
			:id="talentName + ' target skill'"
			v-model="internalSkill.target"
			placeholder="target skill level"
			type="number"
			:max="MAX_SKILL_LEVEL"
			min="0"
			:aria-label="talentName + ' target level'"
			class="w-16" />

		<!-- node 1 -->
		<label :for="talentName + ' node 1 isunlocked'">Unlock Node 1?</label>
		<input
			:id="talentName + ' node 1 isunlocked'"
			v-model="internalSkill.node1.isUnlocked"
			type="checkbox"
			:disabled="skill.target < MIN_SKILL_LEVEL_FOR_NODE" />

		<!-- node 2 -->
		<label :for="talentName + ' node2 isunlocked'">Unlock Node 2?</label>
		<input
			:id="talentName + ' node2 isunlocked'"
			v-model="internalSkill.node2.isUnlocked"
			type="checkbox"
			:disabled="skill.target < MIN_SKILL_LEVEL_FOR_NODE" />
	</div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
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
const internalSkill = ref(props.skill);

watch(internalSkill, (n) => {
	n.current = Math.min(n.current, MAX_SKILL_LEVEL);
	n.target = Math.min(n.target, MAX_SKILL_LEVEL);
	emit("update:skill", n);
});
</script>
