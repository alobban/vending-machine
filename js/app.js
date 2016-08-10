/**
 * Created by vagrant on 8/10/16.
 */
var VendingMachine = (function () {
    function VendingMachine() {
    }
    return VendingMachine;
}());
/**
 * Created by vagrant on 8/10/16.
 */
///<reference path="vendingMachine.ts"/>
var machine = new VendingMachine();
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
//# sourceMappingURL=app.js.map