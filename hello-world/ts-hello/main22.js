var Point23 = /** @class */ (function () {
    function Point23(x, y) {
        this.x = x;
        this.y = y;
    }
    Point23.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point23;
}());
var point23 = new Point23(1, 2);
point23.draw();
