//Declaring variable of type number
var a;
//Declaring variable of type boolean
var b;
//Declaring variable of type String
var c;
//Declaring variable of type Any
var d;
//Declaring array variable of type Number
var e = [1, 2, 3, 4];
//Declaring array variable of type Any
var f = ["1", 2, false];
// Constants
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
// Container for Constants (Enum)
/**
 * This container sets the incremented value to declareted Enums:
 * Take a look in this verbose alternative declaration:
 *      enum Color { Red = 0, Green = 1, Blue = 2};
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
