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
// Фильтрация с использованием индекса
const filteredByIndex = [1, 2, 3, 4, 5, 6].myFilter((x, i) => i % 2 === 0); // [1, 3, 5]


//Реализация метода reduce()
Array.prototype.myReduce = function(callback, initialValue) {
    // Проверяем, является ли массив пустым и не передан initialValue
    if (this.length === 0 && initialValue === undefined) {
        throw new TypeError('Reduce of empty array with no initial value');
    }
    let accumulator;
    let startIndex;
    // Определяем начальное значение аккумулятора и начальный индекс
    if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        accumulator = this[0];
        startIndex = 1;
    }
    // Проходим по элементам массива
    for (let i = startIndex; i < this.length; i++) {
        // Если массив разреженный, пропускаем отсутствующие элементы
        if (i in this) {
            accumulator = callback(accumulator, this[i], i, this);
        }
    }
    return accumulator;
};

// Сумма элементов массива
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.myReduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15
// Поиск максимального значения
const max = numbers.myReduce((acc, curr) => Math.max(acc, curr));
console.log(max); // 5
