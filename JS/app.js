// for loop

for(let i= 0; i < 5; i++) {
    console.log(`(for) i = ${i}`)
}


// outer loop
for(let month = 1; month <= 12; month++) {
    console.log(`month: ${month}`);
    // inner loop
    for(let day = 1; day < 30; day++) {
        console.log(`day: ${day}`);
    }
}


// while loop

let i = 0;
while(i <5) {
    console.log(`${i}`);
    i++
}


// do while loops 

let password;

do {
    input = prompt("password: ")
} while (input != "123")
    console.log("I'm in");


// arrays

const numbers = [1,2,3,4,5]

//foreach loop

numbers.forEach((element)=>{
    console.log(element)
})

