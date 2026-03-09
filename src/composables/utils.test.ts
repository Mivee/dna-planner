import { describe, it, expect } from "vitest";
import { isNullOrEmpty, useClone, sortBy } from "./utils";

describe("isNullOrEmpty", () => {
	it("returns true for null", () => {
		expect(isNullOrEmpty(null)).toBe(true);
	});

	it("returns true for undefined", () => {
		expect(isNullOrEmpty(undefined)).toBe(true);
	});

	it("returns true for empty string", () => {
		expect(isNullOrEmpty("")).toBe(true);
	});

	it("returns true for whitespace-only string", () => {
		expect(isNullOrEmpty("   ")).toBe(true);
	});

	it("returns false for a non-empty string", () => {
		expect(isNullOrEmpty("hello")).toBe(false);
	});

	it("returns false for a string with leading/trailing whitespace", () => {
		expect(isNullOrEmpty("  hello  ")).toBe(false);
	});
});

describe("useClone", () => {
	it("returns a deep copy of an object", () => {
		const original = { a: 1, b: { c: 2 } };
		const clone = useClone(original);
		expect(clone).toEqual(original);
		expect(clone).not.toBe(original);
		expect(clone.b).not.toBe(original.b);
	});

	it("clones arrays", () => {
		const original = [1, 2, 3];
		const clone = useClone(original);
		expect(clone).toEqual(original);
		expect(clone).not.toBe(original);
	});
});

describe("sortBy", () => {
	const items = [
		{ name: "Charlie", age: 30 },
		{ name: "Alice", age: 25 },
		{ name: "Bob", age: 35 },
	];

	it("sorts ascending by string key", () => {
		const sorted = sortBy(items, "name");
		expect(sorted.map((i) => i.name)).toEqual(["Alice", "Bob", "Charlie"]);
	});

	it("sorts descending by string key", () => {
		const sorted = sortBy(items, "name", "Desc");
		expect(sorted.map((i) => i.name)).toEqual(["Charlie", "Bob", "Alice"]);
	});

	it("sorts ascending by numeric key", () => {
		const sorted = sortBy(items, "age");
		expect(sorted.map((i) => i.age)).toEqual([25, 30, 35]);
	});

	it("does not mutate the original array", () => {
		const original = [...items];
		sortBy(items, "name");
		expect(items).toEqual(original);
	});
});
