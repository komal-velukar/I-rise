var num=[1,2,3,4,5,6,7,8,9,11,12,13,14,15]
function findSumAndEven(array) {
    // console.log(array)
    var oddCount = 1;
    var evenCount=1;

    for (var i = 0; i < array.length; i++) {
        // console.log(array[i], i)
        if (array[i] % 2 == 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    console.log(oddCount, "-oddcount")
    console.log(evenCount, "-evenCount")
}
findSumAndEven(num)