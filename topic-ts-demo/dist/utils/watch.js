"use strict";
exports.__esModule = true;
exports.Watch = void 0;
var Watch = /** @class */ (function () {
    function Watch(selector) {
        if (selector === void 0) { selector = ''; }
        var _this = this;
        this.element = null;
        this.element = document.querySelector(selector);
        setInterval(function () {
            var cd = new Date();
            if (_this.element) {
                _this.element.innerHTML = "Time: ".concat(cd.getHours(), ":").concat(cd.getMinutes(), ":").concat(cd.getSeconds());
            }
        }, 1000);
    }
    return Watch;
}());
exports.Watch = Watch;
