// Кастомная реализация встроенного метода map() у массивов

Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}

const mappedArr = [1, 2, 3, 4, 5].myMap(x => x*2); // [2, 4, 6, 8, 10]
