import { demonWedges, demon_WEDGE_COSTS } from "../definitions/demonWedge";
import type {
	DemonWedge,
	DemonWedgeCostAdditionalMaterials,
	DemonWedgeCostBluePrint,
	DemonWedgeCostSummary,
} from "../types/demonWedge";

export function useDemonWedge() {
	/**
	 * Find a demon wedge by its display name
	 */
	function getDemonWedge(displayName: string): DemonWedge | undefined {
		return demonWedges.find((w) => w.displayName === displayName);
	}

	/**
	 * Get cumulative cost at a specific level
	 */
	function getCostAtLevel(level: number) {
		const cost = demon_WEDGE_COSTS.find((c) => c.level === level);
		if (!cost) {
			throw new Error(`Invalid demon wedge level: ${level}`);
		}
		return cost;
	}

	/**
	 * Build a cost summary for upgrading a demon wedge from initialLevel to targetLevel
	 * with the specified quantity
	 */
	function buildSummary(
		wedge: DemonWedge,
		initialLevel: number,
		targetLevel: number,
		quantity: number = 1
	): DemonWedgeCostSummary {
		const startCost = getCostAtLevel(initialLevel);
		const endCost = getCostAtLevel(targetLevel);

		// Calculate deltas
		const coinsDelta = endCost.coins - startCost.coins;
		const carmineGlobulesDelta =
			endCost.carmineGlobules - startCost.carmineGlobules;
		const blueprintCopiesDelta =
			endCost.blueprintCopies - startCost.blueprintCopies;

		// Create maps for blueprints and materials
		const blueprints = new Map<string, DemonWedgeCostBluePrint>();
		const materials = new Map<string, DemonWedgeCostAdditionalMaterials>();

		// Add blueprint to blueprints map
		const bluePrintResult: DemonWedgeCostBluePrint = {
			quantity: blueprintCopiesDelta * quantity,
			source: wedge.blueprint.source,
		};
		blueprints.set(wedge.blueprint.name, bluePrintResult);

		// Add additional materials if they exist
		if (wedge.additionalMaterials) {
			for (const additionalMaterial of wedge.additionalMaterials) {
				const additionalQuantity =
					blueprintCopiesDelta *
					additionalMaterial.quantityPerCopy *
					quantity;

				// Add to materials
				const existing = materials.get(additionalMaterial.name) || {
					quantity: 0,
					rarity: additionalMaterial.rarity,
				};
				existing.quantity = existing.quantity + additionalQuantity;
				materials.set(additionalMaterial.name, existing);
			}
		}

		return {
			coins: coinsDelta * quantity,
			carmineGlobules: carmineGlobulesDelta * quantity,
			blueprints,
			materials,
		};
	}

	return {
		getDemonWedge,
		getCostAtLevel,
		buildSummary,
	};
}
