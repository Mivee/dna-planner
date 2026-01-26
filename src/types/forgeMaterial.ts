// Generic Forge Material Interface
export interface ForgeMaterial {
  itemName: string;
  materials: { [materialName: string]: number };
  coin: number;
  forgeTime: number; // seconds or arbitrary unit
}