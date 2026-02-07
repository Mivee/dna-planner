import { characters } from "../definitions/character";
import { weapons } from "../definitions/weapon";

const imageMap = new Map<string | null, string>([
	...characters.map((c) => [c.name, c.imagecode || ""] as [string, string]),
	...weapons.map((w) => [w.name, w.imageCode || ""] as [string, string]),
]);

export function useImage(
	type: "character" | "weapon" | "element",
	name: string
) {
	switch (type) {
		case "character":
			return getCharacterImage(name);
		case "weapon":
			return getWeaponImage(name);
		case "element":
			return getElementImage(name);
		default:
			return null;
	}
}

function getCharacterImage(name: string) {
	const imagecode = imageMap.get(name);
	if (imagecode) {
		return "assets/characters/T_Bust_" + imagecode + ".png";
	}
	return null;
}

function getWeaponImage(name: string) {
	const imagecode = imageMap.get(name);
	if (imagecode) {
		return "assets/weapons/T_Bust_" + imagecode + ".png";
	}
	return null;
}

function getElementImage(name: string) {
	return "assets/elements/" + name.toLowerCase() + ".png";
}
