import assert from "node:assert/strict";
import { test } from "node:test";
import { evenOrOdd } from "../../../src/codewars/8-kyu/even-or-odd";

test("evenOrOdd identifies positive even numbers", () => {
  assert.equal(evenOrOdd(2), "Even");
});

