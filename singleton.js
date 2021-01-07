const { time } = require("console");

// once instanised it should not instanised again
class Kitchen {
    constructor() {
        this.time = '';
    }
    open(date) {
        console.log(date);
        if (this.time == '') {
            this.time = 'kitchen opened at ' + date;
        }
        return this.time;
    }
    close() {
        this.time = '';
    }
}

let kitchen = new Kitchen();
let i = 0;
let kitchenbooted = setInterval(() => {
    if (i == 5) {
        kitchen.close();
    }
    console.log(kitchen.open(new Date().getTime()));
    if (i == 7) {
        clearInterval(kitchenbooted);
    }
    i++;
}, 2000);