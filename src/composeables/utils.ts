export function isNullOrEmpty(str: string | null | undefined) {
	return str && str.trim() != "";
}

export function useClone(obj: any) {
	return JSON.parse(JSON.stringify(obj));
}
