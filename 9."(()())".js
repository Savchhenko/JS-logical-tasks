// Задача: дублирующий кодер
// Цель этого упражнения — преобразовать строку в новую строку, где каждый символ в новой
// строке — это «(», если этот символ встречается в исходной строке только один раз, или
// «)», если этот символ встречается в исходной строке более одного раза. Нужно
// игнорировать заглавные буквы при определении, является ли символ дубликатом.

// Требуемый результат
// "din" => "((("
// "recede" => "()()()"
// "Success" => ")())())

// Моё решение:
const encoder = (str) => {
    let res = [];
    
    for (let i = 0; i < str.length; i++) {
        let arr = str.toLowerCase().split("");
        const elem = arr.splice(i, 1);
        arr.includes(elem[0]) ? res.push(")") : res.push("(");
    }
    console.log(res.join(""));
};


// Решение без использования массивов:
function duplicateEncode(word){
  let unique='';
  word = word.toLowerCase();
  
  for (let i=0; i<word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      unique += '(';
    }
    else{
      unique += ')';
    }
  }
  return unique;
}


// Решение через map()
function duplicateEncode(word) {
  return word
  .toLowerCase()
  .split('')
  .map( function (a, i, w) {
    return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
  })
  .join('');
}


// One line решение:
function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}

