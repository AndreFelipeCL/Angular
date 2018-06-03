// Interfaces - Custom Types on TS

/**
 * This example is OK, because we get only two parameters for this function.
 * @param {*} x Parameter One
 * @param {*} y Parameter Two
 */
let drawPoint = (x, y) => {
    // ...
};

/**
 * But sometimes, we getting a complex code and defining a lot of them at signature:
 * @param {*} x Parameter One
 * @param {*} y Parameter Two
 * @param {*} a Parameter Three
 * @param {*} b Parameter Four
 * @param {*} c Parameter Five
 * @param {*} d Parameter Six
 * @param {*} e Parameter Seven
 * 
 * So, we need to avoid them...
 */
let drawPoint2 = (x, y, a, b, c, d, e) => {
    // ...
};

/**
 * Here we can pass a object like a parameter with all attributes.
 * 
 * But, as we can see, it is too verbose way. Though, we can use a interface to handle this, as on POO programming language.
 * 
 * @param {*} point X and Y coordenates of a Point.
 */
let drawPoint3 = (point: { x: number, y: number }) => {
    // ...
};

drawPoint3({
    x: 1,
    y: 2
});

// USING INTERFACE

/** Here we're defining the shape of our object*/
interface Point{
    x: number,
    y: number,
}

let drawPoint4 = (point: Point) => {
    // ...
};