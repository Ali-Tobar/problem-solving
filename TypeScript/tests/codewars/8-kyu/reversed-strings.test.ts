import assert from "node:assert/strict";
import { test } from "node:test";
import { solution } from "../../../src/codewars/8-kyu/reversed-strings";

test("solution reverses a string", () => {
  assert.equal(solution("world"), "dlrow");
});
