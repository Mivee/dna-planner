import { v4 as uuid } from "uuid";

export function isNullOrEmpty(str: string | null | undefined) {
	return str && str.trim() != "";
}

export function useClone<T>(obj: T): T {
	return JSON.parse(JSON.stringify(obj)) as T;
}

export function useUUID(): string {
	return uuid();
}
