// console.log(`hello`);
// window.alert(`this is an alert!`);
// console.log(`i like pizza`)
// document.getElementById("myH1").textContent = `Hello`;
// document.getElementById("myP").textContent = `This is a paragraph.`;

// let username = window.prompt("Enter your name:");
// console.log(username);

// let username;
// Document.getElementById("mySubmit").onclick = function() {
//     username = document.getElementsById("myText").value;
//     document.getElementsById("myH1").textContent = `hello ${username}`
// }

// const decreseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.addEventListener("click", function(){
//     count++;
//     countLabel.innerHTML = `${count}`
// })

// decreaseBtn.addEventListener("click", function(){
//     count--;
//     countLabel.innerHTML = `${count}`
// })

// resetBtn.addEventListener("click", function(){
//     count = 0;
//     countLabel.innerHTML = `${count}`
// })

// const myButton = document.getElementById("myButton");
// const label1 = document.getElementById("label1")
// const label2 = document.getElementById("label2")
// const label3 = document.getElementById("label3")
// const min =1;
// const max =6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function(){
//     randomNum1 = Math.floor(Math.random() * max) + min
//     randomNum2 = Math.floor(Math.random() * max) + min
//     randomNum3 = Math.floor(Math.random() * max) + min
//     label1.textContent = randomNum1;
//     label2.textContent = randomNum2;
//     label3.textContent = randomNum3;
// }

// const myCheckBox = document.getElementById("myCheckBoxId");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const paypalBtn = document.getElementById("paypalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function(){
//     if(myCheckBox.checked){
//         subResult.textContent = `you are subcribed!`;
//     }
//     else{
//         subResult.textContent = `you are not subcribed!`
//     }

//     if(visaBtn.checked){
//         paymentResult.textContent = `you are paying with visa`;
//     } else if(masterCardBtn.checked){
//         paymentResult.textContent = `you are paying with masterCard`;
//     } else if(paypalBtn.checked){
//         paymentResult.textContent = `you are paying with paypal`;
//     } else{
//         paymentResult.textContent = `you must select a payment type`;
//     }
// }

///// TERNARY OPERATOR : a shortcut to if{} and else{} statements
// let age = 12;
// let message = age >= 18 ? "you're an adult" : "you're a minor";
// console.log(message)

// let time = 9;
// let greeting = time < 12 ? "good morning" : "good afternoon!";
// console.log(greeting)

// let isStudent = false;
// let tol = isStudent ? "you are a student" : "you are not a student";
// console.log(tol)

// let purchaseAmount = 99;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);


// let username = window.prompt("Enter your name:")

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;

// console.log(username)


// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelcius = document.getElementById("toCelcius");
// const result = document.getElementById("result");
// let temp;

// function convert(){
//     if(toFahrenheit.checked){
//         temp = Number(textBox.value);
//         temp = temp * 9 / 5 + 32;
//         result.textContent = temp.toFixed(1) + "F";
//     } else if(toCelcius.checked){
//         temp = Number(textBox.value);
//         temp = (temp - 32) * (5/9);
//         result.textContent = temp.toFixed(1) + "C";
//     } else{
//         result.textContent = "select a unit";
//     }
// }


// function rollDice(){
//     const numOfDice = document.getElementById("numOfDice").value;
//     const diceResult = document.getElementById("diceResult");
//     const diceImages = document.getElementById("diceImages");
//     const values = [];
//     const images = [];

//     for (let i = 0; i < numOfDice; i++){
//         const value = Math.floor(Math.random() * 6) + 1;
//         values.push(value);
//         images.push(`<img src="dice_images/${value}"`)
//     }

// }


function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "~!@#$%^&*-_+.,';";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
        return "(Password length must be at least 1)";
    }

    if (allowedChars.length === 0) {
        return "(At least 1 set of character needs to be selected)";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

// ---- CALL FUNCTION ----
const password = generatePassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
);

console.log("Generated password:", password);


const prices = [5,30,10,25,15,20];
const total = prices.reduce(sum);
console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element){
    return accumulator + element;
}


class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
    static getcircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(18));
console.log(MathUtil.getcircumference(10));
console.log(MathUtil.getArea(10));


class Rectangle{
    constructor(width, height){
        this.width= width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("width must be a positive number");
        }
    }

     set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("height must be a positive number");
        }
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

    get area(){
        return this._width * this._height;
    }
}

const rectangle = new Rectangle(3,4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);


