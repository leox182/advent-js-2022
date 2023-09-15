import { expect, describe, it } from "vitest";
import countHours from "..";

describe("count extra hours", () => {
  it("should be a function", () => {
    expect(typeof countHours).toBe("function");
  });

  it("parameters should be provided", () => {
    expect(() => countHours()).toThrow()
  })

  it("parameters should be a number and array", () => {
    expect(() => countHours("sting", "string")).toThrow()
  })

  it("test: countHours(2023, ['01/06', '04/01', '12/25'])", () => {
    expect(countHours(2023, ['01/06', '04/01', '12/25'])).toBe(4)
  })

  it("Test: countHours(2000, ['01/01'])", () => {
    expect(countHours(2000, ['01/01'])).toBe(0)
  })
})