// factory - no need to worry about what all are happening inside.just use front end face class
function waiter(name) {

    this.name = name;
    this.type = 'waiter';
    this.call = () => {
        console.log('Hi Sir, My name is ' + this.name + '. I am ' + this.type + ' here how can i help you')
    }

}

function manager(name) {

    this.name = name;
    this.type = 'manager';
    this.call = () => {
        console.log('Hi Sir, My name is ' + this.name + '. I am ' + this.type + ' here how can i help you')
    }

}


function employee() {

    this.employee = [];
    this.create = (name, type) => {
        switch (type) {
            case 'waiter':
                this.employee.push(new waiter(name));
                break;
            case 'manager':
                this.employee.push(new manager(name));
                break;
        }
    }

    this.call = () => {
        this.employee.forEach((v, k) => {
            return v.call();
        })
    }
}


const employees = new employee();
employees.create('bob', 'waiter');
employees.create('john', 'manager');
employees.create('dae', 'manager');
employees.call();