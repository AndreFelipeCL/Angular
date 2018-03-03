// Type Assertions
let message;
message = 'abc';
let isEndsWithC;
let anotherWay;
isEndsWithC = message.endsWith('c');
anotherWay = message.endsWith('c');
console.log("Assertion 1 - (<string>message) = " + isEndsWithC);
console.log("Assertion 2 - (message as string) = " + anotherWay);
