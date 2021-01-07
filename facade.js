//facade is nothins a process have lot of work but the front class will handle all the logics
// like system bootup.bootup class has to start lot of module ..but base class is bootup start
function member(name) {
    this.name = name;
}
function device(name) {
    this.name = name;
}
function Cashier(person) {
    this.name = person.name;
    this.start = function () {
        console.log('cashier ' + this.name + ' started')
    }
}
function Chef(person) {
    this.name = person.name;
    this.start = function () {
        console.log('chef ' + this.name + ' started')
    }
}
function Waiter(person) {
    this.name = person.name;
    this.start = function () {
        console.log('waiter ' + this.name + ' started')
    }
}
function Cleaner(device) {
    this.name = device.name;
    this.start = function () {
        console.log('cleaner ' + this.name + ' started')
    }
}
function equipment(device) {
    this.name = device.name;
    this.start = function () {
        console.log('device ' + this.name + ' started')
    }
}
function Hotel() {
    this.start = function () {
        let bob = new member('bob');
        let john = new member('john');
        let dae = new member('dae');
        let elisa = new member('elisa');
        let mixie = new device('mixie');
        let grinder = new device('grinder');
        let billing = new device('system');
        let cashier = new Cashier(bob);
        cashier.start();
        let chef = new Chef(john);
        chef.start();
        let waiter = new Waiter(dae);
        waiter.start();
        let cleaner = new Cleaner(elisa);
        cleaner.start();
        let equipment_1 = new equipment(mixie);
        equipment_1.start();
        let equipment_2 = new equipment(grinder);
        equipment_2.start();
        let equipment_3 = new equipment(billing);
        equipment_3.start();
    }
};
const hotel = new Hotel();
hotel.start();
