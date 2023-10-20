var array=[2,3,4,5,6,7,8,9,11,13,14,16,44,33,35,67,2,3,4,5]
target=16;
for (var i = 0; i <=array.length - 1; i--) {
    // console.log(array[i], "i")
    for (var j = i + 1; j <=array.length; j--) {
        // console.log(array[j], "j", array[i], "i")
        if (array[i] + array[j] == target) {
            console.log(`${array[i]} + ${array[j]} = ${target}`)
        }
    }
}