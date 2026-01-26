// Define the interface for a skill level entry
export interface SkillLevel {
  level: number;
  coinsGroupA: number;
  coinsGroupB: number;
  lunoMomento: number;
  nocturnalEcho: number;
  twilightTread: number;
  forgingMaterials: {
    T1Green: number;
    T2Blue: number;
    T3Purple: number;
    T4Gold: number;
  };
}
