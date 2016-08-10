/**
 * Created by vagrant on 8/10/16.
 */

class Quarter {
    private value: number = 0.25;
    get Value() {
        return this.value;
    }
    getImageUrl (): string {
        return "img/Quarter.png";
    }
}

var coin = new Quarter();
var value = coin.Value;
