// Map method
/*
const dates = ["2023-12-23", "2022-12-13", "2024-12-25"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[1]}.${parts[2]}.${parts[1]}`;
}
*/

/*
const names = ["bob", "popo", "lolo"];

// names.forEach((name, i) => {
//   console.log(`${i + 1}. ${name}`);
// });

names.map((name, i) => {
    console.log(`${i + 1}. ${name}`);
})


    */

const names = ["anvar", "aziz", "omad", "ozod"];
// const formalNames = [];

// names.forEach((name) => {
//     formalNames.push('Mr. ' + name + 'bek')
// })


// const formalNames = names.map((name) => ("Mr. " + name + "bek"));

const formalNames = names.map((name) => { return ("Mr. " + name + "bek") });

/*
forEach - shunchaki aylantirib beradi, yangi array yaratmaydi. 
map - yangi array yaratsa bo'ladi. Ma'lumotlarni qayta ishlab saqlash uchun kerak
filter => array ichidan ma'lum hususiyatga egalarini AJRATIB, YANGI arrayga saqlash uchun.


forEach - return kerakmas
map - return shart
filter - return kerakmas ( iternary (? true : false), logical operator(>, <, ===, .includes, startsWith))

*/


console.log(formalNames);