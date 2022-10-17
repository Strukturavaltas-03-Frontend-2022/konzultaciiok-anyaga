var Watch = (function () {
    function Watch(selector) {
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
var watcher = new Watch('.watch');
//# sourceMappingURL=main.js.map