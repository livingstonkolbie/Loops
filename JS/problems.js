//problem 1

for(i = 1; i <= 10; i++) {
    console.log(i);
}

//problem 2

let names = ['Kolbie','Conner','Jordan','Nick','Kolton']

for(i = 0; i < names.length; i++) {
    console.log("Hello " + names[i] + "!")
}


//problem 3

let min = 0;
let max = 100;

for(i = min; i <= max; i++) {
    if(i % 7 === 0){
        console.log("Here is the first number divisible by 7: " + i);
    } break;
}