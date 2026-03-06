<template>
	<div v-if="props.skill">
		<ResultStatRow :label="props.label" label-class="opacity-80">
			<template #value>
				{{ props.skill.current }} →
				{{ props.skill.target }}
			</template>
			<template #node>
				<SkillNodes :skill="props.skill" />
			</template>
		</ResultStatRow>
	</div>
</template>
<script lang="ts" setup>
import type { SkillUpgradeConfig } from "../types/upgradeConfig";
import ResultStatRow from "./result/resultStatRow.vue";
import SkillNodes from "./skillNodes.vue";

interface Props {
	skill: SkillUpgradeConfig;
	label: string;
}

const props = defineProps<Props>();
</script>
