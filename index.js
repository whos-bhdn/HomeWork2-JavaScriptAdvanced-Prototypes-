// Напишіть функцію CoffeeMake, яка буде мати в 2 методи: on(),off().
//     Далі напишіть ще методи для 3х типів кавоварок: капельна, ріжкова, каво-машина,
//     які будуть наслідувати базовий функціонал CoffeeMake, а також мати власний.
//     Використовує класи до es6 стандарту.
function CoffeeMake() {}

CoffeeMake.prototype.on = function (){
    console.log(`Machine is on`)
};

CoffeeMake.prototype.off = function (){
    console.log(`Machine is off`)
}
// -------------------------------------------------
function dripCoffeeMachine(coffee){
    this.coffee = coffee;
}

dripCoffeeMachine.prototype = CoffeeMake.prototype;

const MydripCoffeeMachine = new dripCoffeeMachine()

dripCoffeeMachine.prototype.createCoffee = function (coffee) {
    this.coffee = coffee;
    console.log(`Your ${coffee} is done`)
}
// -----------------------------------------------------

function СarobСoffeeMachine(coffee){
    this.coffee = coffee;
}
СarobСoffeeMachine.prototype = CoffeeMake.prototype;

const MyСarobСoffeeMachine = new СarobСoffeeMachine()

СarobСoffeeMachine.prototype.createCoffeeForAllMembersOfFamily = function (cofee, members){
    this.coffee = cofee;
    this.members = members;
    if (members > 5){
        console.log(`СarobСoffeeMachine is busy`);
        setTimeout(() => {
            console.log(`Your ${members} servings of ${cofee} are ready`);
        }, (this.members*1000));
    }
    else if (members < 5 || members != 0){
        console.log(`Your ${members} servings of ${cofee} are ready`);
    }

}
// ---------------------------------------------------------------

function CoffeeMachine(coffee){
    this.coffee = coffee;
}

CoffeeMachine.prototype = CoffeeMake.prototype;

MyCoffeeMachine = new CoffeeMachine();

CoffeeMachine.prototype.workInCafe = function (coffee, clients){
    this.coffee = coffee;
    this.clients = clients;
    if (clients < 10){
        console.log(`Take your ${coffee}`)
    }
    else {
        console.log(`CoffeeMachine doing your ${coffee}. PLease wait ${clients} clients are in front of you`)
        setTimeout(() => {
            console.log(`Your ${coffee} is done`)
        }, (this.clients/2*1000))
    }
}
// ----------------------------------------------------------------------
// MyCoffeeMachine.off();
// MyCoffeeMachine.on();
// MydripCoffeeMachine.createCoffee(`LATTE`);
// MyСarobСoffeeMachine.createCoffeeForAllMembersOfFamily(`latte`, 8)
// MyCoffeeMachine.workInCafe('latte', 20)
