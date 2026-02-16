let num_1 = +prompt("Enter num-1");
console.log('num_1: ',num_1);
let num_2 =  +prompt("Enter num-2");
console.log('num_2: ',num_2);
const sum = (a, b) => {
    return a + b;
}
const sub = (a, b) => {
    return a - b;
}
const mul = (a, b) => {
    return a * b;
}
const div = (a, b) => {
    if(b <= 0) {
        return 'please insert proper input';
    }
    return a / b;
}
const ans_1 = sum(num_1, num_2);
const ans_2 = sub(num_1, num_2);
const ans_3 = mul(num_1, num_2);
const ans_4 = div(num_1, num_2);
console.log('Addition of two number: ',ans_1);
console.log('Subtraction of two number: ',ans_2);
console.log('Multiplication of two number: ',ans_3);
console.log('Division of two number: ',ans_4);