function getMessage() { return "Welcome to DevOps CI!"; }

function showMessage() { document.getElementById("message").textContent = getMessage(); }

function add(a, b) { return a + b; }

if (typeof module !== "undefined") { module.exports = { getMessage, showMessage, add }; }
