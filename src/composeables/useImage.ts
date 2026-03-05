import { characters } from "../definitions/character";
import { daemonWedges } from "../definitions/daemonWedge";
import { weapons } from "../definitions/weapon";

type ImageType = "character" | "weapon" | "element" | "wedge";
export type CharacterImageVariant = "portrait" | "splashart";

interface ImageEntry {
	type: ImageType;
	imageCode: string;
}

const elements = ["Pyro", "Anemo", "Hydro", "Lumino", "Umbro", "Electro"];
const defaultWedgeImageCode = "T_Mod_Mephisto01_Purple";

const imageMap = new Map<string, ImageEntry>([
	...characters.map(
		(c) =>
			[
				c.name,
				{
					type: "character",
					imageCode: c.imagecode || "",
				} as ImageEntry,
			] as [string, ImageEntry]
	),
	...weapons.map(
		(w) =>
			[
				w.name,
				{ type: "weapon", imageCode: w.imageCode || "" } as ImageEntry,
			] as [string, ImageEntry]
	),
	...elements.map(
		(e) =>
			[
				e,
				{ type: "element", imageCode: e.toLowerCase() } as ImageEntry,
			] as [string, ImageEntry]
	),
	...daemonWedges.map(
		(w) =>
			[
				w.displayName,
				{
					type: "wedge",
					imageCode: w.type,
				} as ImageEntry,
			] as [string, ImageEntry]
	),
]);

export function useImage(name: string, variant?: CharacterImageVariant) {
	const entry = imageMap.get(name);
	if (!entry?.imageCode) {
		return null;
	}

	switch (entry.type) {
		case "character":
			return getCharacterImage(entry.imageCode, variant);
		case "weapon":
			return getWeaponImage(entry.imageCode);
		case "element":
			return getElementImage(entry.imageCode);
		case "wedge":
			return getWedgeImage(entry.imageCode);
		default:
			return null;
	}
}

function getCharacterImage(imageCode: string, variant?: CharacterImageVariant) {
	const imagePrefix = getPrefix(variant);
	return (
		"assets/characters/" + variant + "/" + imagePrefix + imageCode + ".png"
	);
}

function getWeaponImage(imageCode: string) {
	if (imageCode) {
		return "assets/weapons/T_Bust_" + imageCode + ".png";
	}
	return null;
}

function getElementImage(imageCode: string) {
	return "assets/elements/" + imageCode + ".png";
}

function getWedgeImage(imageCode: string) {
	if (imageCode) {
		return "assets/wedges/T_Mod_" + imageCode + "01.png";
	}

	return null;
}

function getPrefix(variant?: CharacterImageVariant) {
	switch (variant) {
		case "portrait":
			return "T_Head_";
		default:
			return "T_Bust_";
	}
}
