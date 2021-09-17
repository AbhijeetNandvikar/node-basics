import assert from "assert";
import { add } from "./myLib.mjs";

try {
  console.log("add() should add two numbers ");
  assert.strictEqual(add(2, 5), 10);
  console.log("  ✅ passed");
} catch (e) {
  console.log("  🚫 fail");
  console.error(e);
}

// Assert is a low level module, usually we use a testing framework like jest.
// current lts version of jest don't support ES module syntax, therefore we can use .mjs files without external config.
