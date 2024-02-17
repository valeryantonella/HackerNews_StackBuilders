const EntryController = require("../../server/controllers/EntryController.js");
const testData = require("../fixtures/Data.js");

describe("When and array of news is valid", () => {
  test("returns an array with the news with that have the title with more than 5 words", () => {
    expect(EntryController.filterMoreThanWords(5, testData)).toEqual([
      {
        title: "Visualising system calls for (import seaborn)",
        order: "3.",
        comments: "12",
        points: "58",
      },
      {
        title: "Show HN: Driftmania – an open source PICO-8 racing game",
        order: "4.",
        comments: "31",
        points: "87",
      },
    ]);
  });
});

describe("When and array of news is empty", () => {
  test("returns an empy array", () => {
    expect(EntryController.filterMoreThanWords(5, [])).toEqual([]);
  });
});
