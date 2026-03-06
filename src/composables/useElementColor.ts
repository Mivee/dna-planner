import type { ElementType } from "../types/demonWedge";
import type { ElementColor } from "../types/elementColor";

export function useElementColor(
	element: ElementType | null | undefined
): ElementColor | null {
	switch (element) {
		case "Anemo":
			return "Green";
		case "Electro":
			return "Purple";
		case "Pyro":
			return "Red";
		case "Hydro":
			return "Blue";
		case "Lumino":
			return "Orange";
		case "Umbro":
			return "Black";
		default:
			return null;
	}
}
