function fibonacci(amount: number): number {
    if (amount <= 1) return amount;
    return fibonacci(amount - 1) + fibonacci(amount - 2);
}

// @ts-ignore
let amount: number = +prompt("Nhập số lượng:");
let sum: number = 0;
for (let i = 0; i < amount; i++) {
    console.log(fibonacci(i))
    sum += fibonacci(i)
}
console.log("Tổng là: " + sum);