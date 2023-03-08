import {MapAccount} from "./MapAccount";
import {mainMenu} from "./MainMenu";
let user = new RegExp(/^[0-9a-zA-Z]+$/);
let pass = new RegExp(/^[0-9a-zA-Z]{6,}$/);
let input = require('readline-sync');
let map = new MapAccount();
map.addAccount("hieu03", "hieu123");
function menuSignUpSignIn(){
    let choice = -1
    do {
        console.log(`
    ----Menu Sign up and Sign in----
    1. Sign up
    2. Sign in
    0. Exit
    `)
    choice = +input.question('Enter choice: ');
    switch (choice){
        case 1: signUp();
            break;
        case 2: signIn();
            break;
    }
    }while (choice!=0)
}

function signUp(){
    console.log(`---Menu Sign up---`)
    let username = input.question("Enter username: ");
    let password = input.question("Enter password: ");
    let testUser:boolean = user.test(username);
    let testPass:boolean = pass.test(password);
    let checkSignUp:boolean = map.checkSignUp(username);
    if(testUser === true && testPass === true){
        if(checkSignUp==true){
            console.log('Username already exists');
            signUp();
        } else {
            map.addAccount(username, password)
        }
    } else {
        console.log('Username without spaces and password must be at least 6 characters')
    }
}
function signIn(){
    console.log(`---Menu Sign in---`)
    let username = input.question("Enter username: ");
    let password = input.question("Enter password: ");
    let test = map.checkLogin(username, password);
    if(test == true){
        console.log('Login success');
        mainMenu();
    } else {
        console.log('Re-enter user and password');
        signIn();
    }
}
menuSignUpSignIn();