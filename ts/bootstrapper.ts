/**
 * Created by vagrant on 8/10/16.
 */

///<reference path="vendingMachine.ts"/>
    
var machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);