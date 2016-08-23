var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by vagrant on 8/10/16.
 */
var Coin = (function () {
    function Coin(value) {
        this.value = value;
        this.Value = value;
    }
    return Coin;
}());
var Quarter = (function (_super) {
    __extends(Quarter, _super);
    function Quarter() {
        _super.call(this, 0.25);
    }
    Quarter.prototype.getImageUrl = function () {
        return "img/Quarter.png";
    };
    return Quarter;
}(Coin));
var Dime = (function (_super) {
    __extends(Dime, _super);
    function Dime() {
        _super.call(this, 0.10);
    }
    Dime.prototype.getImageUrl = function () {
        return "img/Dime.png";
    };
    return Dime;
}(Coin));
var Half = (function (_super) {
    __extends(Half, _super);
    function Half() {
        _super.call(this, 0.50);
    }
    Half.prototype.getImageUrl = function () {
        return "img/Half.png";
    };
    return Half;
}(Coin));
var Dollar = (function (_super) {
    __extends(Dollar, _super);
    function Dollar() {
        _super.call(this, 1.00);
    }
    Dollar.prototype.getImageUrl = function () {
        return "img/Dollar.jpg";
    };
    return Dollar;
}(Coin));
/**
 * Created by vagrant on 8/23/16.
 */
var ProductCategory = (function () {
    function ProductCategory() {
        this.imgPath = "img/";
    }
    return ProductCategory;
}());
var SodaCategory = (function (_super) {
    __extends(SodaCategory, _super);
    function SodaCategory() {
        _super.apply(this, arguments);
        this.name = "Soda";
    }
    SodaCategory.prototype.getImageUrl = function () {
        return this.imgPath + "SodaCan.png";
    };
    return SodaCategory;
}(ProductCategory));
var NutsCategory = (function (_super) {
    __extends(NutsCategory, _super);
    function NutsCategory() {
        _super.apply(this, arguments);
        this.name = "Nuts";
    }
    NutsCategory.prototype.getImageUrl = function () {
        return this.imgPath + "Nuts.png";
    };
    return NutsCategory;
}(ProductCategory));
var ChipsCategory = (function (_super) {
    __extends(ChipsCategory, _super);
    function ChipsCategory() {
        _super.apply(this, arguments);
        this.name = "Potato chips";
    }
    ChipsCategory.prototype.getImageUrl = function () {
        return this.imgPath + "Chips.png";
    };
    return ChipsCategory;
}(ProductCategory));
var CandyCategory = (function (_super) {
    __extends(CandyCategory, _super);
    function CandyCategory() {
        _super.apply(this, arguments);
        this.name = "Candy";
    }
    CandyCategory.prototype.getImageUrl = function () {
        return this.imgPath + "Candy.png";
    };
    return CandyCategory;
}(ProductCategory));
var CandyBarCategory = (function (_super) {
    __extends(CandyBarCategory, _super);
    function CandyBarCategory() {
        _super.apply(this, arguments);
        this.name = "Candy bar";
    }
    CandyBarCategory.prototype.getImageUrl = function () {
        return this.imgPath + "CandyBar.png";
    };
    return CandyBarCategory;
}(ProductCategory));
/**
 * Created by vagrant on 8/23/16.
 */
/// <reference path="productCategory.ts" />
var Initial = (function () {
    function Initial() {
        this.name = "please select a product";
        this.price = 0;
    }
    return Initial;
}());
var CocaCola = (function () {
    function CocaCola() {
        this.name = "Coca-Cola";
        this.price = 2.30;
        this.category = new SodaCategory();
    }
    return CocaCola;
}());
var Fanta = (function () {
    function Fanta() {
        this.name = "Fanta";
        this.price = 2.30;
        this.category = new SodaCategory();
    }
    return Fanta;
}());
var Sprite = (function () {
    function Sprite() {
        this.name = "Sprite";
        this.price = 1.80;
        this.category = new SodaCategory();
    }
    return Sprite;
}());
var Peanuts = (function () {
    function Peanuts() {
        this.name = "Peanuts";
        this.price = 1.50;
        this.category = new NutsCategory();
    }
    return Peanuts;
}());
var Cashews = (function () {
    function Cashews() {
        this.name = "Cashews";
        this.price = 1.90;
        this.category = new NutsCategory();
    }
    return Cashews;
}());
var Plain = (function () {
    function Plain() {
        this.name = "Plain";
        this.price = 2.00;
        this.category = new ChipsCategory();
    }
    return Plain;
}());
var Cheddar = (function () {
    function Cheddar() {
        this.name = "Cheddar";
        this.price = 2.00;
        this.category = new ChipsCategory();
    }
    return Cheddar;
}());
var Mints = (function () {
    function Mints() {
        this.name = "Mints";
        this.price = 1.30;
        this.category = new CandyCategory();
    }
    return Mints;
}());
var Gummies = (function () {
    function Gummies() {
        this.name = "Gummies";
        this.price = 1.90;
        this.category = new CandyCategory();
    }
    return Gummies;
}());
var Hershey = (function () {
    function Hershey() {
        this.name = "Hershey's";
        this.price = 1.30;
        this.category = new CandyBarCategory();
    }
    return Hershey;
}());
var MilkyWay = (function () {
    function MilkyWay() {
        this.name = "Milky Way";
        this.price = 1.80;
        this.category = new CandyBarCategory();
    }
    return MilkyWay;
}());
/**
 * Created by vagrant on 8/23/16.
 */
/// <reference path="product.ts" />
var productFactory = (function () {
    function productFactory() {
    }
    productFactory.GetProduct = function () {
        var random = Math.floor(Math.random() * 11);
        switch (random) {
            case 0: return new CocaCola();
            case 1: return new Fanta();
            case 2: return new Sprite();
            case 3: return new Peanuts();
            case 4: return new Cashews();
            case 5: return new Plain();
            case 6: return new Cheddar();
            case 7: return new Mints();
            case 8: return new Gummies();
            case 9: return new Hershey();
            case 10: return new MilkyWay();
        }
    };
    return productFactory;
}());
/**
 * Created by vagrant on 8/10/16.
 */
///<reference path="./coin.ts"/>
///<reference path="./product.ts"/>
///<reference path="./productFactory.ts"/>
var VendingMachineSize;
(function (VendingMachineSize) {
    VendingMachineSize[VendingMachineSize["samll"] = 6] = "samll";
    VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
    VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
})(VendingMachineSize || (VendingMachineSize = {}));
var Cell = (function () {
    function Cell(product) {
        this.product = product;
        this.stock = ko.observable(3);
        this.sold = ko.observable(false);
    }
    return Cell;
}());
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.selectedCell = ko.observable(new Cell(new Initial()));
        this.cells = ko.observableArray([]);
        this.acceptedCoins = [new Dime(), new Quarter(), new Half(), new Dollar()];
        this.canPay = ko.pureComputed(function () { return _this.paid() - _this.selectedCell().product.price >= 0; });
        this.select = function (cell) {
            cell.sold(false);
            _this.selectedCell(cell);
        };
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.Value);
        };
        this.pay = function () {
            if (_this.selectedCell().stock() < 1) {
                alert("I'm sorry, we're out of them!");
                return;
            }
            var currentPaid = _this.paid();
            _this.paid(Math.round(((currentPaid - _this.selectedCell().product.price) * 100)) / 100);
            var currentStock = _this.selectedCell().stock();
            _this.selectedCell().stock(currentStock - 1);
            _this.selectedCell().sold(true);
        };
    }
    Object.defineProperty(VendingMachine.prototype, "size", {
        set: function (givenSize) {
            this.cells([]);
            for (var index = 0; index < givenSize; index++) {
                var product = productFactory.GetProduct();
                this.cells.push(new Cell(product));
            }
        },
        enumerable: true,
        configurable: true
    });
    return VendingMachine;
}());
/**
 * Created by vagrant on 8/10/16.
 */
///<reference path="vendingMachine.ts"/>
var machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map