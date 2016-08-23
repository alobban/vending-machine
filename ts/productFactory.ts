/**
 * Created by vagrant on 8/23/16.
 */

/// <reference path="product.ts" />

class productFactory {
    static GetProduct(): Product {
        let random = Math.floor(Math.random() * 11);
        switch(random) {
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
    }
}