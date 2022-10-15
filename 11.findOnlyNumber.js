// Задача: Массив состоит из чисел, каждое из которых встречается дважды, кроме одного. 
// Найти это единственное число

// Моё решение: 
// 1. отсортировать массив;
// 2. если первые два элемента равны друг другу, то вырезать эти два числа из массива через slice(), и рекурсивно вызвать эту же функцию
// 3. если числа не равны, то вернуть это единственное число


let arr = [6, 4, 2, 4, 5, 12, 10, 9, 6, 2, 9, 10, 12];

// this function sort array
arr.sort(function (a, b) {
    return a - b;
});

const i = 0;

const findOnlyNumber = (arr) => {
    if (arr.length === 0) return "Array is empty";

    if (arr[i] === arr[i+1]) {
        arr = arr.slice(2);
        return findOnlyNumber(arr);
    } else {
        return console.log("Единственное число: ", arr[i]);
    }
};

findOnlyNumber(arr);
