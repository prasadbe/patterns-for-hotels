function pizza(name) {
    this.name = name;
    this.getName = function () {
        return this.name;
    }
    this.getCost = function () {
        return 100;
    };
    this.ingridents = function () {
        return ['bread', 'cheese'];
    }
}


function topup(pizza, name) {
    this.name = name;
    this.getName = function () {
        return this.name;
    }
    this.getCost = function () {
        return pizza.getCost() * 1.5;
    };
    this.ingridents = function () {
        return [...pizza.ingridents(),
            'tomato sauce', 'mountain wast sauce',
            'black leaves'];
    }
}

let plainPizza = new pizza('plain pizza');
console.log(plainPizza.getName());
console.log(plainPizza.getCost());
console.log(plainPizza.ingridents());

let topupPizza = new topup(plainPizza, 'special pizza');
console.log(topupPizza.getName());
console.log(topupPizza.getCost());
console.log(topupPizza.ingridents());