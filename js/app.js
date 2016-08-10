/**
 * Created by vagrant on 8/10/16.
 */
var Quarter = (function () {
    function Quarter() {
        this.value = 0.25;
    }
    Object.defineProperty(Quarter.prototype, "Value", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Quarter.prototype.getImageUrl = function () {
        return "img/Quarter.png";
    };
    return Quarter;
}());
var coin = new Quarter();
var value = coin.Value;
/**
 * Created by vagrant on 8/10/16.
 */
///<reference path="coin.ts"/>
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.value);
        };
    }
    return VendingMachine;
}());
/**
 * Created by vagrant on 8/10/16.
 */
///<reference path="vendingMachine.ts"/>
var machine = new VendingMachine();
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map