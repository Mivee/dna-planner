import { useDemonWedge } from "./useDemonWedge";
import type { DemonWedgeUpgradeConfig } from "../types/upgradeConfig";
import type { MaterialTotals } from "./useMaterialTotals";

export function accumulateDemonWedgeMaterials(
	config: DemonWedgeUpgradeConfig,
	totals: MaterialTotals
) {
	if (!config.name) return;

	const { getDemonWedge, buildSummary } = useDemonWedge();
	const wedge = getDemonWedge(config.name);
	if (!wedge) return;

	const quantity = config.quantity ?? 1;
	const summary = buildSummary(
		wedge,
		config.initialLevel,
		config.targetLevel,
		quantity
	);

	totals.coins += summary.coins;
	totals.carmineGlobules += summary.carmineGlobules;

	summary.blueprints.forEach((blueprintQty, blueprintName) => {
		const existing = totals.blueprintDetails.get(blueprintName);
		totals.blueprintDetails.set(blueprintName, {
			quantity: (existing?.quantity ?? 0) + blueprintQty.quantity,
		});
	});

	summary.materials.forEach((materialQty, materialName) => {
		const existing = totals.demonWedgeMaterials.get(materialName);
		totals.demonWedgeMaterials.set(materialName, {
			quantity: (existing?.quantity ?? 0) + materialQty.quantity,
		});
	});
}
