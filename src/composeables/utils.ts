export function isNullOrEmpty(str: string | null | undefined) {
	return str && str.trim() != "";
}

export function useClone<T>(obj: T): T {
	return JSON.parse(JSON.stringify(obj)) as T;
}
