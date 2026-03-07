import type { ElementType } from "../types/demonWedge";
import type { ImageSuffix } from "../types/ImageSuffix";

export function useElementColor(
	element: ElementType | null | undefined
): ElementColor | null {
	switch (element) {
		case "Anemo":
			return {
				image: "Green",
				humanReadableName: "Green",
				hexCode: "#44ff88",
				textColor: "#000000",
			};
		case "Electro":
			return {
				image: "Purple",
				humanReadableName: "Purple",
				hexCode: "#aa44ff",
				textColor: "#ffffff",
			};
		case "Pyro":
			return {
				image: "Red",
				humanReadableName: "Red",
				hexCode: "#ff4444",
				textColor: "#ffffff",
			};
		case "Hydro":
			return {
				image: "Blue",
				humanReadableName: "Blue",
				hexCode: "#4488ff",
				textColor: "#ffffff",
			};
		case "Lumino":
			return {
				image: "Orange",
				humanReadableName: "Orange",
				hexCode: "#ffdd44",
				textColor: "#000000",
			};
		case "Umbro":
			return {
				image: "Black",
				humanReadableName: "Black",
				hexCode: "#ff44aa",
				textColor: "#ffffff",
			};
		default:
			return null;
	}
}

interface ElementColor {
	image: ImageSuffix;
	hexCode: string;
	textColor: string;
	humanReadableName: string;
}
