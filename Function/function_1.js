// // function 3 steps to follow 
// // 1- Define 2- Declaration 3- Calling 

// function firstSum(){
//     console.log(2+3);
// }
// firstSum();


// const arrowFunction = () => {
//     console.log(5+5);
// };

// arrowFunction();

// // Function Return Type

// function paraFun(a, b){
//     // console.log(a+b);
//     return a+b;
// }
// paraFun(5,9);
// const ans = paraFun(2,3);
// console.log(ans);

let num_1 = +process.argv[2]; //to take input from terminal we use 'process.argv[2]' and '+process.argv[2];'  "+" indicate a   numeric value it is a unary operator that convert String into number.
console.log('num_1: ',num_1);
let num_2 = +process.argv[3];
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