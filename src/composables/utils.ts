import { v4 as uuid } from "uuid";
import type { SortDirection } from "../types/sortDirection";

export function isNullOrEmpty(str: string | null | undefined): boolean {
	return !str || str.trim() === "";
}

export function useClone<T>(obj: T): T {
	return JSON.parse(JSON.stringify(obj)) as T;
}

export function useUUID(): string {
	return uuid();
}

export function sortBy<T>(
	arr: T[],
	key: keyof T,
	direction: SortDirection = "Asc"
): T[] {
	const copy = [...arr];
	return copy.sort((a, b) => {
		if (a[key] < b[key]) return direction === "Asc" ? -1 : 1;
		if (a[key] > b[key]) return direction === "Asc" ? 1 : -1;
		return 0;
	});
}
