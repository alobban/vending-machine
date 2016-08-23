/**
 * Created by vagrant on 8/23/16.
 */

import * as products from "./product"


export default function GetProduct():products.Product {
    let random = Math.floor(Math.random() * 11);
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
