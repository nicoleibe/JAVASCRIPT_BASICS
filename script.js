function calculateArea(length, width) { 
    return lenght * width;
}

console.log(calculateArea(5, 10)); // 50
console.log(calculateArea(7, 3)); // 21
function greet(nicole) {
    return 'Hello,   ${nicole}!';
}
console.log(greet("Nicole")); // Hello, Nicole!
console.log(greet("David")); // Hello, David!
function sumNumbers(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}
console.log(sumNumbers)([1, 2, 3, 4, 5]); // 15
console.log(sumNumbers([10, 20, 30])); // 60
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
let num =1;
while (num <= 10) {
    console.log(num);
    num++;
}
function sumArrayWhileLoop(arr) {
    let sum = 0, i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}
console.log(sumArrayForLoop([1, 2, 3, 4,]));
console.log(sumArrayForLoop([5, 10, 15]));
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printArrrayWhileLoop(arr) {
    let i = 0;
    while (i < arr.length) {
        console.log(arr[i]);
        i++;
    }
}
printArrayForLoop(["apple", "banana", "cherry"]);
printArrayForLoop([10, 20, 30]);
function even0r0dd(num) {
    return num % 2 === 0 ?  "Even" : "Odd";
}
console.log(even0r0dd(4));
console.log(even0r0dd(7));

function gradeCalculator(score) {
    if (score >=90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}
console.log(gradeCalculator(95));
console.log(gradeCalculator(76));
console.log(gradeCalculator(50));