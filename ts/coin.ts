/**
 * Created by vagrant on 8/10/16.
 */

export abstract class Coin {
    constructor(public value:number) {
    }

    abstract getImageUrl():string;
}

export class Dime extends Coin {
    constructor() {
        super(0.10);
    }

    getImageUrl():string {
        return "img/Dime.png";
    }
}

export class Quarter extends Coin {
    constructor() {
        super(0.25);
    }

    getImageUrl():string {
        return "img/Quarter.png";
    }
}

export class Half extends Coin {
    constructor() {
        super(0.50);
    }

    getImageUrl():string {
        return "img/Half.png";
    }
}

export class Dollar extends Coin {
    constructor() {
        super(1.00);
    }

    getImageUrl():string {
        return "img/Dollar.jpg";
    }
}
