import assert from "node:assert/strict";
import { test } from "node:test";
import { add } from "../../src/practice/add";

test("add returns the sum of two numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("add handles zero as an identity value", () => {
  assert.equal(add(0, 7), 7);
});
