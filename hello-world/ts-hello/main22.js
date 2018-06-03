var Point22 = /** @class */ (function () {
    function Point22(x, y) {
        this.x = x;
        this.y = y;
    }
    Point22.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point22;
}());
var point22 = new Point22(1, 2);
point22.x = 1;
point22.y = 2;
point22.draw();
