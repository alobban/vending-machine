/**
 * Created by vagrant on 8/23/16.
 */
define(["require", "exports", "./product"], function (require, exports, products) {
    "use strict";
    function GetProduct() {
        var random = Math.floor(Math.random() * 11);
        switch (random) {
            case 0:
                return new products.CocaCola();
            case 1:
                return new products.Fanta();
            case 2:
                return new products.Sprite();
            case 3:
                return new products.Peanuts();
            case 4:
                return new products.Cashews();
            case 5:
                return new products.Plain();
            case 6:
                return new products.Cheddar();
            case 7:
                return new products.Mints();
            case 8:
                return new products.Gummies();
            case 9:
                return new products.Hershey();
            case 10:
                return new products.MilkyWay();
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = GetProduct;
});
//# sourceMappingURL=productFactory.js.map