<template>
	<div>
		{{ props.weapon }}
	</div>
	<div>
		<div v-for="value in itemsNeeded">
			{{ value }}
		</div>
	</div>
</template>
<script lang="ts" setup>
import { useWeapon } from "../composeables/useWeapon";

interface Props {
	weapon: string;
}

const props = defineProps<Props>();
const { weapon } = useWeapon(props.weapon);
const itemsNeeded = [
	weapon.value?.range == "Melee" ? "Sharpening Potion" : "Projectile",
	"Gold Sand",
	"Repulsive Crystal",
];
</script>
