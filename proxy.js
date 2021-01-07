function priceApi(item) {
    this.item = item;
    this.getEstimate = function() {
        //Api to call price
        console.log('Fetching price for ' + this.item);
        return Math.floor(Math.random() * 100) + 100;
    };
}

function priceApiProxy() {
    this.cache = [];
    this.getEstimate = function(item) {
        if (typeof this.cache[item] == 'undefined') {
            this.cache.push(item);
            this.cache[item] = new priceApi(item).getEstimate();
        } else {
            console.log('Caching price for ' + item);
        }
        return this.cache[item];
    }
}
let proxy = new priceApiProxy();
console.log(proxy.getEstimate('chicken 65'));
console.log(proxy.getEstimate('mutton chops'));
console.log(proxy.getEstimate('chicken 65'));
console.log(proxy.getEstimate('prawn fry'));
console.log(proxy.getEstimate('mutton chops'));