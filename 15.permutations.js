//*this solution works only for Node.js v20 and higher because of array method toSorted()

//'a': return: ['a']
//'ab': return ['ab', 'ba']
//'abc': return ['abc','acb','bac','bca','cab','cba']
//'aabb': return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

//duplicates sjould be removed

function shuffle(arr, res) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.length === 1) return arr;
        if (arr.length === 2) return [arr.join(""), arr[1] + arr[0]];
        const first = arr[i];
        const rest = arr.toSpliced(i, 1);

        if (rest.length > 2) {
            res = res.concat(shuffle(rest, []).map(str => first + str));
        } else {
            res.push(first + rest.join(""));
            res.push(first + rest[1] + rest[0]);
        }
    }

    return res;
}

function permutations(string) {
    const symbols = string.split("");
    const result = shuffle(symbols, []);

    console.log('new Set(result): ', Array.from(new Set(result)));
	return Array.from(new Set(result));
}

permutations('bacd');
