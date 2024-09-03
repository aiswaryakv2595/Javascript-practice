let obj = {};
let maliciousPayload = JSON.parse('{"__proto__": {"polluted": "yes"}}');

// Merging the malicious payload into obj
Object.assign(obj, maliciousPayload);

console.log({}.polluted); // Outputs "yes"