import { expect, describe, it } from "vitest";
import wrapping from "..";

describe("wrapping gifts", () => {
  it("should be a function", () => {
    expect(typeof wrapping).toBe("function");
  });

  it("should throw an error if an array is not a supplier", () => {
    expect(() => wrapping()).toThrow("Gifts must be an array");
  });

  it("should be a empty array", () => {
    expect(wrapping([])).toEqual([]);
  });

  it("wrapping a non strings", () => {
    expect(wrapping([12, {gift: "cat"}, null])).toEqual([])
  })

  it("wrapping a single gift", () => {
    expect(wrapping(["cat"])).toEqual(["*****\n*cat*\n*****"]);
  });

  it("wrapping a group of gifts", () => {
    expect(wrapping(["cat", "game", "socks"])).toEqual([
      "*****\n*cat*\n*****",
      "******\n*game*\n******",
      "*******\n*socks*\n*******"
    ])
  })
});
