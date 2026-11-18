import assert from "node:assert/strict";
import { test } from "node:test";
import { nearestSq } from "../../../src/codewars/8-kyu/find-nearest-square-number";

test("nearestSq returns an existing perfect square unchanged", () => {
  assert.equal(nearestSq(144), 144);
});

test("nearestSq returns the nearest lower or upper square", () => {
  assert.equal(nearestSq(111), 121);
  assert.equal(nearestSq(3), 4);
  assert.equal(nearestSq(5), 4);
});
