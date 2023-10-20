var number=[20,10,20,30,40,50,90,77,13]
function findSumAndEven(array) {
    // console.log(array)

    for (var i = 0; i < array.length; i++) {
        // console.log(array[i], i)
        if (array[i] % 2 == 0) {
            console.log(`${array[i]} this number is even.`)
        } else {
            console.log(`${array[i]} this number is odd.`)
        }
    }
}
findSumAndEven(number)

