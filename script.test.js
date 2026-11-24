const test = require("node:test"); const assert = require("node:assert/strict");

const { getMessage, showMessage, add } = require("./script.js");

test("Test 1: Verify welcome message", () => { assert.equal(getMessage(), "Welcome to DevOps CI!"); });

test("Test 2: Verify message is not empty", () => { assert.ok(getMessage().length > 0); });

test("Test 3: Verify addition operation", () => { assert.equal(add(10, 20), 30); });

test("Test 4: Verify addition with negative number", () => { assert.equal(add(10, -5), 5); });

test("Test 5: Verify button functionality", () => { const element = { textContent: "" };

global.document = {
    getElementById: () => element
};

try {
    showMessage();
    assert.equal(element.textContent, getMessage());
} finally {
    delete global.document;
}


});
