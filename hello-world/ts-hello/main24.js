var Point24 = /** @class */ (function () {
    function Point24(x, y) {
        this.x = x;
        this.y = y;
    }
    Point24.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point24;
}());
var point24 = new Point24(1, 2);
point24.draw();
