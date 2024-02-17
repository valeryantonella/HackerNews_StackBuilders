const EntryController = require("../../server/controllers/EntryController.js");
const testData = require("../fixtures/Data.js");

describe("When and array of news is valid", () => {
  test("returns an array with the news with that have the title with less than 5 words or equals", () => {
    expect(EntryController.filterLessEqualWords(5, testData)).toEqual([
      {
        title: "Open source is great",
        order: "1.",
        comments: "22",
        points: "97",
      },
      {
        title: "Bootstrapped founders share insights",
        order: "2.",
        comments: "31",
        points: "146",
      },
      {
        title: "Visualization for data analysis",
        order: "3.",
        comments: "18",
        points: "63",
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
    expect(EntryController.filterLessEqualWords(5, [])).toEqual([]);
  });
});
