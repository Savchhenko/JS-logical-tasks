// Кастомная реализация встроенного метода map() у массивов

Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}

const mappedArr = [1, 2, 3, 4, 5].myMap(x => x*2); // [2, 4, 6, 8, 10]


// Кастомная реализация встроенного метода filter()
Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}
[1, 2, 3, 4, 5, 6].myFilter(x => x % 2 === 0); // [2, 4, 6]
