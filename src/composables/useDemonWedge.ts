import { demonWedges, demon_WEDGE_COSTS } from "../definitions/demonWedge";
import type { DemonWedge, DemonWedgeCostSummary } from "../types/demonWedge";

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
		const blueprints = new Map<string, number>();
		const materials = new Map<string, number>();

		// Add blueprint to blueprints map
		blueprints.set(
			wedge.blueprintSource.name,
			blueprintCopiesDelta * quantity
		);

		// Add additional materials if they exist
		if (wedge.additionalMaterials) {
			for (const additionalMaterial of wedge.additionalMaterials) {
				const additionalQuantity =
					blueprintCopiesDelta *
					additionalMaterial.quantityPerCopy *
					quantity;

				// Add to materials
				const existing = materials.get(additionalMaterial.name) || 0;
				materials.set(
					additionalMaterial.name,
					existing + additionalQuantity
				);
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
