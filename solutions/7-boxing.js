// BEGIN
const hasArrayString = (array) => {
    for (const element of array) {
        if (typeof element === 'string') {
            return true;
        }
    }
    return false;
};

const magic =(...args) => {
    if (hasArrayString(args)) {
        return 'Error';
    }
    let sum = 0;
    for (const val of args) {
        sum += val;
    }
    
    const my = (...newArgs) => {
        
        return magic(sum, ...newArgs);
    }
    my.valueOf = () => sum;
    return my;
};

export default magic;
// END
