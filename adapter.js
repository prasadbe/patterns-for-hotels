
function Gravy(name) {
    this.name = name;
    this.boil = function () {
        console.log(this.name + ' will boil for 30 minutes');
    }
    this.addWater = function () {
        console.log(this.name + ' will add 250 ml water');
    }
    this.addMasala = function () {
        console.log(this.name + ' will add masala');
    }
    this.doIt = function () {
        console.log(this.name + ' gravy done!');
    }
}

function Dry(name) {
    this.name = name;
    this.boil = function () {
        console.log(this.name + ' will boil for 30 minutes');
    }
    this.addWater = function () {
        console.log(this.name + ' will add 150 ml water');
    }
    this.addMasala = function () {
        console.log(this.name + ' will add masala');
    }
    this.doIt = function () {
        console.log(this.name + ' dry done!');
    }
}

function gravyToDry(name) {
    this.name = name;

    this.doIt = function () {
        let gravy = new Gravy(name);
        gravy.boil();
        gravy.addWater();
        gravy.addMasala();
        console.log(this.name + ' dry done!');
    }
}
console.log(`will you please take 
order one panner gravy!`);
let gravy = new Gravy('panner');
gravy.boil();
gravy.addWater();
gravy.addMasala();
gravy.doIt();
console.log(`will you please take 
order one chicken fry!`);
let dry = new Dry('chicken');
dry.boil();
dry.addWater();
dry.addMasala();
dry.doIt();
console.log(`will you please take 
order one beef fry with semigravy!`);
let gravdry = new gravyToDry('beef');
gravdry.doIt();