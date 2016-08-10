/**
 * Created by vagrant on 8/10/16.
 */

    ///<reference path="coin.ts"/>

class VendingMachine {
    private paid = 0;
    acceptCoin = (coin: Quarter): void => {
        this.paid = this.paid + coin.value;
        var element = document.getElementById("total")
        element.innerHTML = this.paid.toString();
    }
}