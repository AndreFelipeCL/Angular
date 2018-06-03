var Point21 = /** @class */ (function () {
    function Point21() {
    }
    Point21.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point21.prototype.getDistance = function (another) {
        //..
    };
    return Point21;
}());
var point21 = new Point21();
point21.x = 1;
point21.y = 2;
point21.draw();
