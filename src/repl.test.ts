import { describe, expect, test } from "vitest";

import { cleanInput } from "./repl";

describe.each([
  {
    input: "  hello world  ",
    expected: ["hello", "world"],
  },
  {
    input: "this is a test sentence",
    expected: ["this", "is", "a", "test", "sentence"],
  },
  {
    input: "Charmander Bulbasaur PIKACHU",
    expected: ["charmander", "bulbasaur", "pikachu"],
  },
  {
    input: "             test",
    expected: ["test"],
  },
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    const actual = cleanInput(input);

    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});
