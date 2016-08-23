/**
 * Created by vagrant on 8/23/16.
 */

/// <reference path="product.ts" />

class productFactory {
    static GetProduct(): CocaCola {
        return new CocaCola();
    }
}