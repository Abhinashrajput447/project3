let arr = [10, 20, 30, 40, 50];

let double = arr.map(function (num) {
    return num * 2;
})
   

// console.log(double); // Output: [2, 4, 6, 8, 10]

let squre = arr.map(function (num) {
    return num * num;
})

// console.log(squre); // Output: [1, 4, 9, 16, 25]

let stringArr = arr.map(function (num) {
    return num.toString();
});


let stringArr2 = arr.map((num) => (num*num).toString());
// console.log(stringArr2); // Output: ["1", "4", "9", "16", "25"]

let evenArr = arr.filter((num) => num%2==0);
// console.log(evenArr); // Output: [2, 4]


let check = [1, 2, 3, 4].every((num)=>(num%2==0)); // Output: false

// console.log(check);

let res = [1, 2, 3, 4].reduce((acc, num) => acc + num, 0); // Output: 10

// console.log(res);

let result = arr.reduce((max, el) => {
    if(el > max) {
        return el;
    } else {
        return max;
    }
});

// console.log(result); // Output: 10

let checkMueTen = arr.every((num) => (num %10) == 0); // Output: true

// console.log(checkMueTen);

let minNum = arr.reduce((min, el) => {
    if(el < min){
        return el;
    }else{
        return min;
    }
});

// console.log(minNum); // Output: 10

//default patameter

function func(name, age = 25) {
    // console.log(name, age);
}

// func("Abhinash"); // Output: Abhinash 25
// func("Abhinash", 30); // Output: Abhinash 30


//Spead Operator

function sum(a, b, c) {
    return a + b + c;
}


let numbers = [1, 2, 3];
// console.log(..."Abhiansh"); // Output: A b h i a n s h

// console.log(Math.max(...numbers)); // Output: 3
// console.log(Math.min(...numbers)); // Output: 1

let arr2 = [4, 5, 6];

let newArr = [...arr, ...arr2];

// console.log(newArr);    // Output: [10, 20, 30, 40, 50, 4, 5, 6

arr2.push(7);

// console.log(arr2); // Output: [4, 5, 6, 7]
// console.log(newArr); // Output: [10, 20, 30, 40, 50, 4, 5, 6] (newArr is not affected by changes in arr2)

let odd = [1, 3, 5];
let even = [2, 4, 6];

// let combined = [...odd, ...even];

// console.log(combined); // Output: [1, 3, 5, 2, 4, 6]

let data = {
    name: "Abhinash",
    age: 18, 
    city: "Bangalore",
};

// console.log(data.name); // Output: Abhinash
// console.log(data.age); // Output: 18
// console.log(data.city); // Output: Bangalore

data.country = "India";

// console.log(data); // Output: {name: "Abhinash", age: 18, city: "Bangalore", country: "India"}      

let newData = {...data, country: "India"};

// console.log(newData); // Output: {name: "Abhinash", age: 18, city: "Bangalore", country: "India"}

//rest operator

function sumAll(...args) {
    return args.reduce((add, el) => add + el, 0);
}

function sum(a, b, ...numbers) {
    let sum = a + b;
    for(let num of numbers) {
        sum += num;
    }
    return sum; 
}

// console.log(sum(1, 2)); // Output: 3

// console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

function min(msg, ...numbers) {
    console.log(msg);
    return Math.min(...numbers);
    return numbers.reduce((min, el) => el+min, 0);
}

// console.log(min("Finding minimum number", 5, 2, 9, 1)); // Output: Finding minimum number 1

//Destructuring
// let names = ["Abhinash", "Varsha", "Ritik", "Ashutosh"];
// let [winner, rimmerUp, ...rest] = names;

// console.log(winner); // Output: Abhinash
// console.log(rimmerUp); // Output: Varsha
// console.log(rest); // Output: ["Ritik", "Ashutosh"]

//Destructuring objects

let person = {
    name: "Abhinash",
    age: 18,
    city: "Bangalore",
    salary: 120000,
    subject: "Computer Science" ,
    password: "12345",
};

let {name, age, city, salary, subject="Computer Science", password: pass, balance = "458984159"} = person;

console.log(name); // Output: Abhinash
console.log(age); // Output: 18
console.log(city); // Output: Bangalore
console.log(salary); // Output: 120000
console.log(subject); // Output: Computer Science
console.log(pass); // Output: 12345
console.log(balance); // Output: 458989 (default value is used since balance is not present in the person object)


//constructor function

// function Person(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
// }

// let person1 = new Person("Abhinash", 18, "Bangalore");
// let person2 = new Person("Varsha", 19, "Mumbai");

// console.log(person1); // Output: Abhinash


// console.log(person1); // Output: Person {name: "Abhinash", age: 18, city: "Bangalore"}
// console.log(person2); // Output: Person {name: "Varsha", age: 19, city: "Mumbai"}    

