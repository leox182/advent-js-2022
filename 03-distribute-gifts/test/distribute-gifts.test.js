import { describe, expect, it } from "vitest";
import distributeGifts from "..";

describe("distribute gifts", () => {
  it("should be a function", () => {
    expect(typeof distributeGifts).toBe("function")
  })

  it("parameters should be provider", () => {
    expect(() => distributeGifts()).toThrow()
  })

  it("parameters should be an array", () => {
    expect(() => distributeGifts({}, {})).toThrow()
  })

  it("Test: distributeGifts(['a', 'b', 'c'], ['d', 'e'])", () => {
    expect(distributeGifts(['a', 'b', 'c'], ['d', 'e'])).toBe(1)
  })

  it("Test: distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])", () => {
    expect(distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])).toBe(5)
  })
})