let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("even number:");
for (let i = 0; i < number; i++) {
    if (number[i] % 2 === 0) {
        console.log(number[i]);
    }
}
let sum = 0;
for (let i = 0; i < number; i++) {
    sum += number[i];
}

console.log("Sum of all number:", sum);