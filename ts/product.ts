/**
 * Created by vagrant on 8/23/16.
 */

/// <reference path="productCategory.ts" />

interface Product {
    name: string
    price: number
    category?: ProductCategory
}

class Initial implements Product {
    name = "please select a product";
    price = 0;
}

class CocaCola implements Product {
    name = "Coca-Cola";
    price = 2.30;
    category = new SodaCategory()
}

class Fanta implements Product {
    name = "Fanta";
    price = 2.30;
    category = new SodaCategory()
}

class Sprite implements Product {
    name = "Sprite";
    price = 1.80;
    category = new SodaCategory()
}

class Peanuts implements Product {
    name = "Peanuts";
    price = 1.50;
    category = new NutsCategory()
}

class Cashews implements Product {
    name = "Cashews";
    price = 1.90;
    category = new NutsCategory()
}

class Plain implements Product {
    name = "Plain";
    price = 2.00;
    category = new ChipsCategory()
}

class Cheddar implements Product {
    name = "Cheddar";
    price = 2.00;
    category = new ChipsCategory()
}

class Mints implements Product {
    name = "Mints";
    price = 1.30;
    category = new CandyCategory()
}

class Gummies implements Product {
    name = "Gummies";
    price = 1.90;
    category = new CandyCategory()
}

class Hershey implements Product {
    name = "Hershey's";
    price = 1.30;
    category = new CandyBarCategory()
}

class MilkyWay implements Product {
    name = "Milky Way";
    price = 1.80;
    category = new CandyBarCategory()
}