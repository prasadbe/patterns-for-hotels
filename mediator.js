function Employee(name) {
    this.name = name;
    this.kitchenRoom = null;
}

Employee.prototype = {
    send: function(to, message) {
        this.kitchenRoom.send(this, to, message);
    },
    receive: function(message, from) {
        console.log(from.name + ' to ' + this.name + ':' + message)
    }
}

function kitchenRoom() {
    this.members = [];
    this.addMember = function(member) {
        this.members.push(member.name);
        member.kitchenRoom = this;
    };
    this.send = function(from, to, message) {
        to.receive(message, from);
    }
}
const kitchenroom = new kitchenRoom();
const waiter = new Employee('waiter');
const chef = new Employee('chef');
const manager = new Employee('manager');
const cleaner = new Employee('cleaner');
kitchenroom.addMember(waiter);
kitchenroom.addMember(chef);
kitchenroom.addMember(manager);
kitchenroom.addMember(cleaner);
waiter.send(chef, 'Master 2 Briyani Order');
cleaner.send(waiter, 'Table 2 Cleaned');
manager.send(cleaner, 'Table 3 Customer Vandhuirukanga');
chef.send(waiter, 'Chickern Briyani Gali');