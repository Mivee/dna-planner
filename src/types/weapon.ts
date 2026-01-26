export interface Weapon {
  id: number;
  name: string;
  weaponType:
    | "Assault Rifle"
    | "Katana"
    | "Bow"
    | "Sword"
    | "Whipsword"
    | "Pistol"
    | "Grenade Launcher"
    | "Polearm"
    | "Dual Blades"
    | "Greatsword"
    | "Dual Pistols"
    | "Shotgun";
  range: "Melee" | "Ranged";
  source: string;
}
