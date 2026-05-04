// BEGIN
const make = (numer = 0, denom = 1) => ({
    numer, denom,
    setNumer(number) {
        this.numer = number;
    },
    getNumer() {
        return this.numer;
    },
    setDenom(number) {
        this.denom = number;
    },
    getDenom() {
         return this.denom;
    },
    add(rationalNumber) {
        const result = make();
        result.numer = (this.numer * rationalNumber.denom) + (rationalNumber.numer * this.denom);
        result.denom = (this.denom * rationalNumber.denom);
        return result;
    },
    toString() {
        return `${this.numer}/${this.denom}`;
    }
})

export default make;

// END