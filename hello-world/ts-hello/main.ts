//Declaring variable of type number
let a : number;

//Declaring variable of type boolean
let b : boolean

//Declaring variable of type String
let c : string;

//Declaring variable of type Any
let d : any;   

//Declaring array variable of type Number
let e : number[] = [1, 2, 3, 4];
//Declaring array variable of type Any
let f : any[] = ["1", 2, false];

// Constants
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

// Container for Constants (Enum)
/**
 * This container sets the incremented value to declareted Enums:
 * Take a look in this verbose alternative declaration:
 *      enum Color { Red = 0, Green = 1, Blue = 2};
 */
enum Color { Red = 0, Green = 1, Blue = 2 };


let backgroundColor = Color.Blue;