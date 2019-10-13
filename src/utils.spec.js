const { some } = require("./utils");

describe("utils", () => {
  describe("some", () => {
    const arr = ["one", "two", "three"];
    const str = "two";

    it("should return true", () => {
      expect(some(arr, str)).toBe(true);
    });

    it("should return false", () => {
      expect(some(arr, "hello")).toBe(false);
    });

    it("should throw error", () => {
      expect(() => some([], 1)).toThrow();
    });
  });
});
