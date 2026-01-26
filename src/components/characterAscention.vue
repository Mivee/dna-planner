<template>
    <div>
        <div>
            <img :src="imgSource" />
        </div>
        <select v-model="upgradeConfig.name">
            <option v-for="value in characters">
                {{ value.name }}
            </option>
        </select>
        <div>
            <select type="number" max="80" v-model="upgradeConfig.level.current">
                <option v-for="lvl in possibleCharacterLevels">
                    {{ lvl }}
                </option>
            </select>
            <select type="number" max="80" v-model="upgradeConfig.level.target">
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
    </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { characters } from '../definitions/character';
import CharacterMaterials from './characterMaterials.vue';
import type { CharacterUpgrade } from '../types/upgradeConfig';
import { characterLevelingMaterials } from '../definitions/characterAscention';


const upgradeConfig = ref<CharacterUpgrade>({
    name: null,
    level: { current: null, target: null },
    type: "Character",
    skill: {
        current: 0,
        target: 0,
        node1: {
            isUnlocked: false
        },
        node2: {
            isUnlocked: false
        }
    },
    ult: {
        current: 0,
        target: 0,
        node1: {
            isUnlocked: false
        },
        node2: {
            isUnlocked: false
        }
    },
    passive: {
        current: 0,
        target: 0,
        node1: {
            isUnlocked: false
        },
        node2: {
            isUnlocked: false
        }
    }
});

const hasCharacterSelected = computed(() => upgradeConfig.value.name != "" && upgradeConfig.value.name != null);
const possibleCharacterLevels = computed(() => characterLevelingMaterials.map(x => x.level));

const selectedCharacter = computed(() => upgradeConfig.value.name || "");

const imgSource = computed(() => {
    if (selectedCharacter.value) {
        return "assets/characters/" + selectedCharacter.value.toLowerCase() + ".png"
    }
})
</script>