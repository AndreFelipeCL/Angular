// Type Assertions

let message;
message = 'abc';
let isEndsWithC : boolean;
let anotherWay : boolean;

isEndsWithC = (<string>message).endsWith('c');
anotherWay = (message as string).endsWith('c');

console.log("Assertion 1 - (<string>message) = " + isEndsWithC);
console.log("Assertion 2 - (message as string) = " + anotherWay);