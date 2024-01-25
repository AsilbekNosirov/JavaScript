// .filter()

/*
const numbers = [3, 8, 5, 12] //+3
const newarr = []
// // const newarr = [6, 11, 8, 15]

// for (let i = 0; i < numbers.length; i++) {
    //     newarr.push(numbers[i] + 3);
    // }
    
    
    numbers.forEach(n => {
        newarr.push(n+3)
    });
    console.log(newarr);
    
*/



const words = ["potato", "tomato", "kiwi", "coconut", "palmfruit", "banana"];

const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(longWords);

function getShortWords(element){
    return element.length > 6;
}

function getLongWords(element){
    return element.length < 6;
}

// const users = [23, 56, 12, 5, 32, 15]

// const youngsters = users.filter(usersAge => usersAge < 18)

// console.log(youngsters);

// const names = ['aziz', 'bahodir', 'murodjon', 'Asilbek']

// const namesStartingWithA = names.filter(name => name[0] === 'a')
// const namesStartingWithA = names.filter(name => name[0] === 'a' || name[0] === "A")

// console.log(namesStartingWithA);