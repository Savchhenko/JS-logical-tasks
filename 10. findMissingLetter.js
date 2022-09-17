// Напишите метод, который принимает на вход массив последовательных (возрастающих) букв
// и возвращает отсутствующую букву в массиве. Вы всегда получите допустимый массив. И
// всегда будет отсутствовать ровно одна буква. Длина массива всегда будет не менее 2.
// Массив всегда будет содержать буквы только в одном регистре.

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"


// Первое решение:
function findMissingLetter(array) {
  let first = array[0].charCodeAt(0)
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i)
    }
  }
  throw new Error("Invalid input")
}

// Решение через slice
const findMissingLetter = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const start = alphabet.indexOf(array[0]);
  return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
};

// Решение c использованием filter
function findMissingLetter(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  if(str[0] == str[0].toUpperCase()) {
    alphabet = alphabet.toUpperCase(); 
  }
  alphabet = alphabet.split('');
  let index = alphabet.indexOf(str[0]);
  let strip = alphabet.slice(index, index + str.length)
  return strip.filter(x => !str.includes(x))[0];
}
