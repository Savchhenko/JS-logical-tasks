# JS-logical-tasks

## 1. Disemvowel(str)
- it's a function that takes a string and return a new string with all vowels removed.

*For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".*

Note: for this kata y isn't considered a vowel.

## 2. Divisors(integer)
- it's a function that takes an integer n > 1 and returns an array with all of the integer's divisors (except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' 

## 3. SquareDigits(num)
- its's a function that squares every digit of a number and concatenate them.

*For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.*

Note: The function accepts an integer and returns an integer

## 4. Accum(letters)

*accum("abcd") -> "A-Bb-Ccc-Dddd"*
*accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"*

## 5. Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:
Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 
Constraints:
1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].

## 6. Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 
Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

![image](https://user-images.githubusercontent.com/47991015/168085384-7e75a642-51d8-4e90-b984-70347a7ef9cd.png)
![image](https://user-images.githubusercontent.com/47991015/168085443-fc773abb-11da-4ec2-a63c-d44bc0af228d.png)

## 7. Split string by two letters

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

## 8. Sum of digits in a number

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
*    16  -->  1 + 6 = 7
*   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
* 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
* 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

## 9. DuplicateEncode

### Задача: дублирующий кодер
Цель этого упражнения — преобразовать строку в новую строку, где каждый символ в новой
строке — это «(», если этот символ встречается в исходной строке только один раз, или
«)», если этот символ встречается в исходной строке более одного раза. Нужно
игнорировать заглавные буквы при определении, является ли символ дубликатом.

### Требуемый результат
"din" => "(((" <br>
"recede" => "()()()" <br>
"Success" => ")())())" <br>
"(( @" => "))(("

# 10. findMissingLetter

## Задача: найдите недостающую букву
Напишите метод, который принимает на вход массив последовательных (возрастающих) букв
и возвращает отсутствующую букву в массиве. Вы всегда получите допустимый массив. И
всегда будет отсутствовать ровно одна буква. Длина массива всегда будет не менее 2.
Массив всегда будет содержать буквы только в одном регистре.
## Требуемый результат
["a","b","c","d","f"] -> "e" <br>
["O","Q","R","S"] -> "P" <br>
(Используйте английский алфавит из 26 букв!)

# 11. findOnlyNumber (from array)

## Задача: 
Массив состоит из чисел, каждое из которых встречается дважды, кроме одного. 
Нужно найти это единственное число.

# 12. findNumThatAppearsOddNumOfTimes 

### Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.

## Examples
[7] should return 7, because it occurs 1 time (which is odd). <br>
[0] should return 0, because it occurs 1 time (which is odd). <br>
[1,1,2] should return 2, because it occurs 1 time (which is odd). <br>
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd). <br>
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). <br>

# 13. timeConverter(number)

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99  <br>
MM = minutes, padded to 2 digits, range: 00 - 59  <br>
SS = seconds, padded to 2 digits, range: 00 - 59  <br>

The maximum time never exceeds 359999 (99:59:59)

## Examples
(0), '00:00:00' <br>
(59), '00:00:59' <br>
(45296), '12:34:56' <br>

# 14. replaceMidleElem(arr, newElem)

Заменяет средний элемент массива на новый элемент. <br>
Если массив с четным количеством элементов, то добавляется средний, и таким образом длина массива увеличивается на 1.

# 15. permutations(string)

To solve task we need to create all permutations of a non-empty input string and remove duplicates, if present.
Create as many "shufflings" as you can!

## Examples:

With input 'a':<br>
Your function should return: ['a']<br>

'ab': return ['ab', 'ba']<br>
'abc': return ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']<br>
'aabb': return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']<br>
