<template>
    <div>
        <div>
            <img :src="imgSource" width="600" height="600" />
        </div>
        <select v-model="upgradeConfig.name">
            <option v-for="value in characters">
                {{ value.name }}
            </option>
        </select>
        <div>
            <select v-model="upgradeConfig.level.start">
                <option v-for="lvl in possibleCharacterLevels">
                    {{ lvl }}
                </option>
            </select>
            <select v-model="upgradeConfig.level.end">
                <option v-for="lvl in possibleCharacterLevels">
                    {{ lvl }}
                </option>
            </select>
        </div>
        <div>

            skill
            <input placeholder="current skill level" v-model="upgradeConfig.skill.current" type="number" max="10"
                id="current skill" />
            <input placeholder="current skill level" v-model="upgradeConfig.skill.target" type="number" max="10"
                id="target skill" />

            <!-- node 1 -->
            <input type="checkbox" v-model="upgradeConfig.skill.node1.isUnlocked" id="node 1 isunlocked" />

            <!-- node 2 -->
            <input type="checkbox" v-model="upgradeConfig.skill.node2.isUnlocked" id="node2 isunlocked" />
        </div>
        <div>
            ult

            <input placeholder="current ultimate level" v-model="upgradeConfig.ult.current" type="number" max="10"
                id="current ult" />
            <input placeholder="current ultimate level" v-model="upgradeConfig.ult.target" type="number" max="10"
                id="target ult" />
            <!-- node 1 -->
            <input type="checkbox" v-model="upgradeConfig.ult.node1.isUnlocked" id="node 1 isunlocked" />

            <!-- node 2 -->
            <input type="checkbox" v-model="upgradeConfig.ult.node2.isUnlocked" id="node2 isunlocked" />
        </div>
        <div>

            passive
            <input placeholder="current passive level" v-model="upgradeConfig.passive.current" type="number" max="10"
                id="current passive" />
            <input placeholder="current passive level" v-model="upgradeConfig.passive.target" type="number" max="10"
                id="target passive" />

            <!-- node 1 -->
            <input type="checkbox" v-model="upgradeConfig.passive.node1.isUnlocked" id="node 1 isunlocked" />

            <!-- node 2 -->
            <input type="checkbox" v-model="upgradeConfig.passive.node2.isUnlocked" id="node2 isunlocked" />
        </div>

        <CharacterMaterials v-if="hasCharacterSelected" :upgrade-config="upgradeConfig" :key="selectedCharacter" />

        <button @click="addItem('Humectant')">click me</button>
        <button @click="addItem('Water Purifier')">click me</button>
    </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { characters } from '../definitions/character';
import CharacterMaterials from './characterMaterials.vue';
import type { CharacterUpgrade } from '../types/upgradeConfig';
import { characterLevelingMaterials } from '../definitions/characterAscention';
import { useInventory } from '../stores/inventory';

const hasCharacterSelected = computed(() => upgradeConfig.value.name != "" && upgradeConfig.value.name != null);
const possibleCharacterLevels = computed(() => characterLevelingMaterials.map(x => x.level));

const selectedCharacter = computed(() => upgradeConfig.value.name || "");

const imgSource = computed(() => {
    if (selectedCharacter.value) {
        return "assets/characters/" + selectedCharacter.value.toLowerCase() + ".png"
    }
});

const upgradeConfig = ref<CharacterUpgrade>({
    name: null,
    level: {
        start: possibleCharacterLevels.value[0],
        end: possibleCharacterLevels.value[0]
    },
    type: "Character",
    skill: {
        current: 1,
        target: 1,
        node1: {
            isUnlocked: false
        },
        node2: {
            isUnlocked: false
        }
    },
    ult: {
        current: 1,
        target: 1,
        node1: {
            isUnlocked: false
        },
        node2: {
            isUnlocked: false
        }
    },
    passive: {
        current: 1,
        target: 1,
        node1: {
            isUnlocked: false
        },
        node2: {
            isUnlocked: false
        }
    }
});
function addItem(name: string) {
    const { setQuantity } = useInventory();
    setQuantity(name, 1)
}
</script>