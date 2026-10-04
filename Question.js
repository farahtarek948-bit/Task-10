// Question 1

function evenOrOdd(num) {
    if(num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

evenOrOdd(7);

// ---------------------------------------------------

// Question 2
function Larger(num1, num2) {
    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}

Larger (7,20);

// ---------------------------------------------------

// Question 3
function calculateAge(birthYear) {
    let currentYear = 2026;
    let age = currentYear - birthYear;

    console.log(age);
}

calculateAge(2007);

// ---------------------------------------------------

// Question 4
function oddNumbers(num) {
    for (let i = 1; i <= 10; i++) 
{
    if (i % 2 !== 0) {
        console.log(i)
    }
}
}

oddNumbers(10);

// ---------------------------------------------------

// Question 5
function sumNumbers(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++)
{
    sum = sum + i;
}

    console.log(sum);
        
}

sumNumbers(5);