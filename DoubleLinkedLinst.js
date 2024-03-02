var Real = /** @class */ (function () {
    function Real(val) {
        this.val = [];
        this.val = val;
    }
    Real.prototype.getVal = function (idx) {
        if (!this.val[idx]) {
            return -1;
        }
        return this.val[idx];
    };
    Real.prototype.getLength = function () {
        return this.val.length;
    };
    return Real;
})();
var UNREAL = new Real(["1", "2", "3"]);
var val = UNREAL.getVal(10);
