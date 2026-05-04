import _ from 'lodash';

// BEGIN
class Cart {
    constructor() {
        this.items = [];
        this.cost = 0;
        this.count = 0;
    }

    addItem(item, count) {
        this.items.push({item, count});
        this.count += count;
        this.cost += count * item.price;
    }

    getItems() {
        return this.items;
    }

    getCost() {
        return this.cost;
    }

    getCount() {
        return this.count;
    }
}

export default Cart;
// END
