import { daemonWedges, DAEMON_WEDGE_COSTS } from "../definitions/daemonWedge";
import type { DaemonWedge, DaemonWedgeCostSummary } from "../types/daemonWedge";

export function useDaemonWedge() {
	/**
	 * Find a daemon wedge by its display name
	 */
	function getDaemonWedge(displayName: string): DaemonWedge | undefined {
		return daemonWedges.find((w) => w.displayName === displayName);
	}

	/**
	 * Get cumulative cost at a specific level
	 */
	function getCostAtLevel(level: number) {
		const cost = DAEMON_WEDGE_COSTS.find((c) => c.level === level);
		if (!cost) {
			throw new Error(`Invalid daemon wedge level: ${level}`);
		}
		return cost;
	}

	/**
	 * Build a cost summary for upgrading a daemon wedge from initialLevel to targetLevel
	 * with the specified quantity
	 */
	function buildSummary(
		wedge: DaemonWedge,
		initialLevel: number,
		targetLevel: number,
		quantity: number = 1
	): DaemonWedgeCostSummary {
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

		// Add blueprint materials to materials map
		const blueprintMaterialQuantity =
			blueprintCopiesDelta *
			wedge.blueprintSource.materialsPerCopy *
			quantity;
		materials.set(wedge.blueprintSource.name, blueprintMaterialQuantity);

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
		getDaemonWedge,
		getCostAtLevel,
		buildSummary,
	};
}
