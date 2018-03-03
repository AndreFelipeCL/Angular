// Declaring Arrow Functions
let show = function (message) {
    console.log(message);
};
// OR even
let show1 = (message) => {
    console.log(message);
};
// Or even less...
let show2 = (message) => console.log(message);
let show3 = message => console.log(message);
let show4 = () => console.log("No Parameters here...");
show("Andre");
show1("Felipe");
show3("Camargo");
show4();
