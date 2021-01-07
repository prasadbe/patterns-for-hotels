function plate(name, qty) {
    this.name = name;
    this.qty = qty;
    this.getSetQty = function () {
        //this.name + ' set means ' + this.qty)
        return this.qty;
    }
    this.specialSetToday = function (newSet) {
        return newSet(this);
    }
}

let newplate_1 = new plate('Dosa', 2);
let newplate_2 = new plate('Poori', 3);
console.log('Dosa Set Qty');
console.log(newplate_1.getSetQty());
console.log('Poori Set Qty');
console.log(newplate_2.getSetQty());

function specialSetToday(plated) {
    return plated.getSetQty() * 2;
}
console.log('Christmas Dosa Set Qty');
console.log(newplate_1.specialSetToday(specialSetToday));
console.log('Christmas Dosa Set Qty');
console.log(specialSetToday(newplate_2));
