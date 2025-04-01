// code your solution here
function superbowlWin(record) {
  const win = record.find((game) => game.result === "W");
  return win ? win.year : undefined;
}

const record1 = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
];

const record2 = [
  { year: "2012", result: "L" },
  { year: "2011", result: "N/A" },
];

test("returns the year of the first Super Bowl win", () => {
  expect(superbowlWin(record1)).toBe("2015");
});

test("returns undefined if no Super Bowl win is found", () => {
  expect(superbowlWin(record2)).toBe(undefined);
});