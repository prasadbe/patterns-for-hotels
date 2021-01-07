// remote and receiver

function tableRemote(getWater, callWaiter, closeBill) {
    this.actions = [];
    this.addAction = function (action) {
        //console.log(this.actions);
        this.actions.push(action);
    }
    this.getAction = function () {
        return this.actions;
    }
    this.water = function (type) {
        this.addAction('water-' + type);
        if (type) {
            getWater.execute();
        } else {
            getWater.unexecute();
        }

    }
    this.waiter = function (type) {
        this.addAction('waiter-' + type);
        if (type) {
            callWaiter.execute();
        } else {
            callWaiter.unexecute();
        }
    }
    this.close = function (type) {
        this.addAction('closebill-' + type);
        if (type) {
            closeBill.execute();
        } else {
            closeBill.unexecute();
        }
    }

    this.undo = function () {
        let action = this.actions[this.actions.length - 1];
        if (action == 'water') {
            this.water(0);
        } else if (action == 'waiter') {
            this.waiter(0);
        } else if (action == 'close') {
            this.close(0);
        }
        this.actions.pop();
    }
    this.undoAll = function () {
        this.actions.forEach((v, k) => {
            if (v == 'water') {
                this.water(0);
            } else if (v == 'waiter') {
                this.waiter(0);
            } else if (v == 'close') {
                this.close(0);
            }
        });
        this.actions = [];
    }
}

function command(name) {

    this.name = name;
    this.execute = () => {
        console.log('client need ' + this.name)
    }
    this.unexecute = () => {
        console.log('client cancelled ' + this.name)
    }
}

let water = new command('water');
let waiter = new command('waiter');
let bill = new command('bill');

let remote = new tableRemote(water, waiter, bill);
remote.water(1);
remote.waiter(1);
remote.close(1);
console.log(remote.getAction());
remote.undo();
console.log(remote.getAction());
remote.close(0);
remote.waiter(1);
remote.water(1);
remote.close(1);
console.log(remote.getAction());
remote.undoAll();
console.log(remote.getAction());
