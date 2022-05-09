# JS-logical-tasks

## 1. Disemvowel(str)
- it's a function that takes a string and return a new string with all vowels removed.

*For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".*

Note: for this kata y isn't considered a vowel.

## 2. Divisors(integer)
- it's a function that takes an integer n > 1 and returns an array with all of the integer's divisors (except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' 

## 3. SquareDigits(num)
- its's a function that squares every digit of a number and concatenate them.

*For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.*

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
