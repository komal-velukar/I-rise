const array = ['x', 'y', 'z'];

array.forEach((element) => console.log(element));


const A= [11,12,13,14,15,16,17,18,19,20];


const initialValue = 1;
const sumWithInitial = A.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);


const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday'];
weekdays.sort();
console.log(weekdays)

const A1= [10,20,30,40,50,60,70];
A1.sort();
console.log(A1);

var ob = { Numberofcolours: 5, coloursList: ["red", "black", "green","voilet","yellow"] }

console.log(ob.Numberofcolours)
console.log(ob.coloursList)
console.log(ob.coloursList[0])

var ob={Numberofcolours:"Six Hundred"}
var Showresult=JSON.stringify(ob)
console.log(Showresult.Numberofcolours)

Showresult=JSON.parse(Showresult)
console.log(Showresult)
console.log(Showresult.Numberofcolours)

