import { expect, describe, it, should } from "vitest";
import getFilesToBackup from "..";

describe("backups files", () => {
  it("should be a function", () => {
    expect(typeof getFilesToBackup).toBe("function");
  });

  it("should throw an error if params is not a supplier", () => {
    expect(() => getFilesToBackup()).toThrow("parameters must be provided");
  });

  it("should throw new error if incorrect params is provider", () => {
    expect(() => getFilesToBackup("string", "string")).toThrow("parameters must be provided");
  })

  it(`test: getFilesToBackup(1546300800, [
    [ 3, 1546301100 ],
    [ 2, 1546300800 ],
    [ 1, 1546300800 ],
    [ 1, 1546300900 ],
    [ 1, 1546301000 ]
  ]`, () => {
    expect(
      getFilesToBackup(1546300800, [
        [3, 1546301100],
        [2, 1546300800],
        [1, 1546300800],
        [1, 1546300900],
        [1, 1546301000],
      ])
    ).toEqual([1, 3]);
  });

  it(`test: getFilesToBackup(1546300800, [
    [1000, 1546301100],
    [3, 1546301100],
    [2, 1546300800],
    [1, 1546300900]
  ]`, () => {
    expect(
      getFilesToBackup(1546300800, [
        [1000, 1546301100],
        [3, 1546301100],
        [2, 1546300800],
        [1, 1546300900],
      ])
    ).toEqual([1, 3, 1000]);
  });
});
