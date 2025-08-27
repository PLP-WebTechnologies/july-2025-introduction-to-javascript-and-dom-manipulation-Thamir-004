// ----------------------------
// Part 1: Variables and Conditionals
// ----------------------------
let age = 18;
let name = "Alice";

if (age >= 18) {
    console.log(`${name} is an adult.`);
} else {
    console.log(`${name} is a minor.`);
}

// Display variable info in HTML
document.getElementById("variable-output").textContent = `${name} is ${age} years old.`;

// ----------------------------
// Part 2: Functions
// ----------------------------

// Function to greet user
function greetUser(userName) {
    alert(`Hello, ${userName}! Welcome to the site.`);
}

// Function to calculate sum of two numbers
function sumNumbers(a, b) {
    return a + b;
}

// ----------------------------
// Part 3: Loops
// ----------------------------

// Example 1: For loop
for (let i = 1; i <= 5; i++) {
    console.log(`For loop iteration: ${i}`);
}

// Example 2: While loop
let count = 1;
while (count <= 3) {
    console.log(`While loop count: ${count}`);
    count++;
}

// ----------------------------
// Part 4: DOM Interactions
// ----------------------------

// 1. Button click to greet user
document.getElementById("greet-btn").addEventListener("click", function() {
    greetUser(name);
});

// 2. Button click to calculate sum and display alert
document.getElementById("calculate-btn").addEventListener("click", function() {
    let result = sumNumbers(5, 10);
    alert(`The sum of 5 and 10 is ${result}`);
});

// 3. Loop through a list and highlight items
let fruitItems = document.querySelectorAll("#fruit-list li");
for (let i = 0; i < fruitItems.length; i++) {
    fruitItems[i].style.color = "green";
    fruitItems[i].textContent += " 🍎";
}
