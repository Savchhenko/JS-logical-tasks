// ["ab", "ba", "abc", "bca"] =>  [["abc","bca"],["ab","ba"]]
// ["listen", "silent", "enlist"] => [["listen","silent","enlist"]]
// ["eat", "tea", "tan", "ate", "nat", "bat"] => [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

//функция находит в массиве строки-анаграмы и группирует их (мое решение)
function groupAnagrams(arr) {
  let res = [];
  if (arr[0]) {
    res.push([arr[0]]);
    for (let i = 1; i < arr.length; i++) {
      let wasGrouped = false;
      res.forEach((group) => {
        if (group[0].split('').sort().join('') === arr[i].split('').sort().join('')) {
          group.push(arr[i]);
          wasGrouped = true;
        }
      })
      if (!wasGrouped) {
        res = [...res, [arr[i]]];
      }
    }
  }
  return res;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));




// предложенное решение:
function groupAnagrams(arr) {
  // Map для группировки по отсортированной строке
  const map = new Map();
  for (let word of arr) {
    // Сортируем буквы в слове
    const key = word.split('').sort().join('');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(word);
  }
  // Возвращаем массив групп
  return Array.from(map.values());
}
