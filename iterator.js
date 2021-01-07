// define own set of rules;
const SpecialOfDay = ['Chicken 65', 'Panner Tikka', 'Mughal Briyani',
    'Fish Fry', 'Gobi Tikka', 'Veg Noodles', 'Nalli Fry'
];

function dayOfWeekAsString(dayIndex) {
    return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][dayIndex] || '';
}


function SpecialDayItems(items) {
    this.items = items;
    this.index = items.length - 1;
}

SpecialDayItems.prototype = {
    getTodayItem: function() {
        return dayOfWeekAsString(this.index) + ' Special Item -' + this.items[this.index--];
    },
    availableItem: function(id) {
        return this.index >= 0;
    }
};

const specialItem = new SpecialDayItems(SpecialOfDay);
while (specialItem.availableItem()) {
    console.log(specialItem.getTodayItem());
}