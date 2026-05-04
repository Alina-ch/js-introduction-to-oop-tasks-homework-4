// BEGIN
function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
};

Money.prototype.getValue = function getValue() {
    return this.value;
}

Money.prototype.getCurrency = function getCurrency() {
    return this.currency;
}

Money.prototype.exchangeTo = function exchangeTo(currency) {
    const dollarsPerEuro = 1.2;
    const euroPerDollar = 0.7;
if (this.currency !== currency && this.currency == 'usd') {
    return new Money(this.value * euroPerDollar, 'eur');
}
else if (this.currency !== currency && this.currency == 'eur') {
    return new Money(this.value * dollarsPerEuro, 'usd');
}

return new Money(this.value, currency);
}

Money.prototype.add = function add(money) {
    if (this.currency !== money.currency) {
        const newMoney = money.exchangeTo(this.currency);
        return new Money (this.value + newMoney.value, this.currency);
    }
    return new Money(this.value + money.value);
}

Money.prototype.format = function format() {
    if (this.currency === 'usd') {
        return `$${(this.value).toLocaleString('en-IN', {minimumFractionDigits: 2})}`;
    }
    else {
        return `€${(this.value).toLocaleString('en-IN', {minimumFractionDigits: 2})}`;
    }
}

export default Money;
