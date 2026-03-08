<template>
	<div class="w-full pl-4 flex flex-col gap-1 opacity-75">
		<div class="flex justify-between items-center">
			<span>Node 1</span>
			<span>{{ skill.node1?.isUnlocked ? "Unlocked" : "Locked" }}</span>
		</div>
		<div class="flex justify-between items-center">
			<span>Node 2</span>
			<span>{{ skill.node2?.isUnlocked ? "Unlocked" : "Locked" }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { SkillUpgradeConfig } from "../types/upgradeConfig";

interface Props {
	skill: SkillUpgradeConfig;
}

defineProps<Props>();
</script>
