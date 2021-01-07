// fire to everyone when any change comes
class Itenaries {
    constructor() {
        this.list = [];
    }
    subscribe(item) {
        this.list.push(item);
    }
    unsubscribe(name) {
        this.list = this.list.filter((v, k) => {
            return v.name != name
        });
    }
    fire() {
        this.list.forEach((v, k) => {
            console.log('orders sheet to chef -' + v.name + '-' + 'fired');
        });

        console.log('*****');
    }
}
const itenary = new Itenaries();
itenary.subscribe({
    name: 'chicken 65',
    used: 1,
    type: 'plate'
});
itenary.subscribe({
    name: 'mutton briyani',
    used: 2,
    type: 'plate'
});
itenary.fire();
itenary.unsubscribe('mutton briyani');
itenary.fire();