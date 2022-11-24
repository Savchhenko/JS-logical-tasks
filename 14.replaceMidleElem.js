function replaceMidleElem(arr, newElem) {
    if (arr.length % 2 === 0) {
        let newArr = [];
        for (let i = 0; i < arr.length / 2; i++) {
            newArr.push(arr[i]);
        }
        newArr.push(newElem);
        for (let i = arr.length / 2; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
        arr = newArr;
    } else {
        arr[Math.round(arr.length/2)-1] = newElem;
    }
    return arr;
};
