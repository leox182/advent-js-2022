import { expect, it, describe} from "vitest";
import getCompleted from "..";

describe("Get fraction completed", () => {
  it("Should be a function", () => {
    expect(typeof getCompleted).toBe("function");
  });

  it("Should throw a error if parameters it's not provided", () => {
    expect(() => getCompleted()).toThrow();
  });

  it("Parameters should be provided in valid 'hh:mm:ss' format string", () => {
    expect(() => getCompleted(12, "25:61:23")).toThrow();
  });

  it("Parameters should be greater than '0'", () => {
    expect(() => getCompleted('00:00:00', '00:00:00')).toThrow()
  })

  it("Test: getCompleted('01:00:00', '01:00:00')", () => {
    expect(getCompleted("01:00:00", "01:00:00")).toBe("1/1");
  });

  it("Test: getCompleted('03:30:30', '05:50:50')", () => {
    expect(getCompleted("03:30:30", "05:50:50")).toBe("3/5");
  });

});
