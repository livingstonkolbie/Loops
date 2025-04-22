// for loop

for(let i = 0; i <= 10; i++) {
    console.log(i)
}



// while loop

let username = "";

while(username === "" || username === null) {
    username = prompt('Enter your name');
}

alert(`hey ${username}`);



// do while loop
// for this you can do let username; --- it can be undefined here but not for while loops... it'll just skip the while loop and go straight to console log and be undefined

do{
    username = prompt('Put in your name again');
} while(username === "" || username === null) 

alert(`thanks ${username}`);
console.log(`I think we're getting this!`);


//pratice
// while loop

let loggedIn = false;
let logInName;
let password;

while(!loggedIn) {
    logInName = prompt(`Type your username`);
    password = prompt(`Type your password`);

    if(logInName === "kolbieal" && password === "lala") {
        loggedIn = true;
        alert('You are logged in');
        console.log('Yep! Logged in!');
    } else {
        alert(`something is wrong, try again`);
    }
} 

//do while loop for same example
// just take everything, move while line to bottom and add do to the top ** loggedIn has to = true now or else it'll just skip the entire thing

loggedIn = true;
logInName;
password;

 do{
    logInName = prompt(`Type your username`);
    password = prompt(`Type your password`);

    if(logInName === "kolbieal" && password === "lala") {
        loggedIn = true;
        alert('You are logged in');
        console.log('Yep! Logged in!');
    } else {
        alert(`something is wrong, try again`);
        console.log('User needs to refresh the page');
    }
}while(!loggedIn)