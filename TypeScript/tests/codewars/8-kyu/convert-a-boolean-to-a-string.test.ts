import assert from "node:assert/strict";
import { test } from "node:test";
import { booleanToString } from "../../../src/codewars/8-kyu/convert-a-boolean-to-a-string";

test("booleanToString converts booleans to strings", () => {
  assert.equal(booleanToString(true), "true");
  assert.equal(booleanToString(false), "false");
});
