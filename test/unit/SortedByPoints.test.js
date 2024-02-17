const EntryController = require("../../server/controllers/EntryController.js");
const testData = require("../fixtures/Data.js");

describe("When and array of news is valid", () => {
  test("returns an array with the news sorted by points", () => {
    expect(EntryController.sortByPoints(testData)).toEqual([
      {
        title: "Bootstrapped founders share insights",
        order: "2.",
        comments: "31",
        points: "146",
      },
      {
        title: "Open source is great",
        order: "1.",
        comments: "22",
        points: "97",
      },
      {
        title: "Show HN: Driftmania – an open source PICO-8 racing game",
        order: "4.",
        comments: "31",
        points: "87",
      },
      {
        title: "Visualization for data analysis",
        order: "3.",
        comments: "18",
        points: "63",
      },
      {
        title: "Visualising system calls for (import seaborn)",
        order: "3.",
        comments: "12",
        points: "58",
      },
      {
        title: "Effective Git usage",
        order: "5.",
        comments: "12",
        points: "31",
      },
    ]);
  });
});

describe("When and array of news is empty", () => {
  test("returns an empy array", () => {
    expect(EntryController.sortByPoints([])).toEqual([]);
  });
});
