// change=ing the strategy based on new method
function Vegeterian() {


    this.getSoup = () => {
        return [
            'Tomato Soup',
            'Green Pasta Soup',
            'Vegetables Soup'
        ]
    }

    this.getAppetizer = () => {
        return [
            'French Fries',
            'Smileys',
            'Gobi 65'
        ]
    }

    this.getMeals = () => {
        return [
            'Mixed Meals',
            'Full Meals',
            'Combo Meals'
        ]
    }

}

function NonVegeterian() {

    this.getSoup = () => {
        return [
            'Chicken Soup',
            'Aatu Kaal Soup',
            'Nandu Soup'
        ]
    }

    this.getAppetizer = () => {
        return [
            'Chciken 65',
            'Chilli Beef',
            'Fish Fry'
        ]
    }

    this.getMeals = () => {
        return [
            'Fish Meals',
            'Egg Meals',
            'Chicken Briyani'
        ]
    }

}


function Menu() {
    this.type = '';
    this.strategy = (type) => {
        this.type = type;
    }
    this.getList = () => {
        return [this.type.getSoup(),
            this.type.getAppetizer(),
            this.type.getMeals()
        ];
    }
}


const vegeterian = new Vegeterian();

const nonvegeterian = new NonVegeterian();

const menu = new Menu();

menu.strategy(vegeterian);
console.log(menu.getList());

menu.strategy(nonvegeterian);
console.log(menu.getList());