/**
 * Created by vagrant on 8/10/16.
 */

    ///<reference path="coin.ts"/>

class VendingMachine {
    private paid = ko.observable(0);
    acceptCoin = (coin: Quarter): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.value);
    }
}