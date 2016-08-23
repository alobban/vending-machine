/**
 * Created by vagrant on 8/23/16.
 */

abstract class ProductCategory {
    protected imgPath = "img/";

    name: string;
    abstract getImageUrl(): string;
}

class SodaCategory extends ProductCategory{
    name = "Soda";
    getImageUrl() {
        return this.imgPath + "SodaCan.png"
    }
}

class NutsCategory extends ProductCategory{
    name = "Nuts";
    getImageUrl() {
        return this.imgPath + "Nuts.png"
    }
}

class ChipsCategory extends ProductCategory{
    name = "Potato chips";
    getImageUrl() {
        return this.imgPath + "Chips.png"
    }
}

class CandyCategory extends ProductCategory{
    name = "Candy";
    getImageUrl() {
        return this.imgPath + "Candy.png"
    }
}

class CandyBarCategory extends ProductCategory{
    name = "Candy bar";
    getImageUrl() {
        return this.imgPath + "CandyBar.png"
    }
}