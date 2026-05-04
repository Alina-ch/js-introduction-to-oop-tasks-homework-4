// BEGIN
function each(objects, callback) {
    objects.map(obj => callback.call(obj));
    };

export default each;
//END
