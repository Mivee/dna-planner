import type { LevelingMaterial } from "./levelingMaterial";

// Weapon material type definitions
interface WeaponForgingMaterials {
  T1_Green: number;
  T2_Blue: number;
}

interface WeaponAscensionMaterials {
  primary: {
    T1_Green: number;
    T2_Blue: number;
    T3_Purple: number;
  };
  secondary: {
    T1_Green: number;
    T2_Blue: number;
    T3_Purple: number;
  };
}

export type WeaponLevelingMaterial = LevelingMaterial<
  WeaponAscensionMaterials,
  WeaponForgingMaterials
>;

// Character material type definitions
interface CharacterForgingMaterials {
  T1_Green: number;
  T2_Blue: number;
}

interface CharacterAscensionMaterials {
  T1_Green: number;
  T2_Blue: number;
  T3_Purple: number;
}

export type CharacterLevelingMaterial = LevelingMaterial<
  CharacterAscensionMaterials,
  CharacterForgingMaterials
> & {
  coins: {
    groupA: number;
    groupB: number;
  };
};
