
// Question -01
// let num_1 = +process.argv[2];
// console.log('num_1: ',num_1);

// const evenOrOddNumber = (a)=>{
//     if(a % 2 == 0){
//         return `number is Even`;
//     }
//     else{
//         return `number is Odd`;
//     }
// }

// const ans = evenOrOddNumber(num_1);
// console.log(ans);

// Question -02
// let num_1 = +process.argv[2];
// console.log('num_1: ',num_1);
// const numberIsPosNeg = (a)=>{
//     if(a > 0){
//         return `number is Positive`;
//     }
//     else if( a == 0){
//         return `number is Zero`;
//     }
//     else{
//         return `number is Negative`;
//     }
// }
// const ans_1 = numberIsPosNeg(num_1);
// console.log(ans_1);

// Question 3

let num_1 = +process.argv[2];
console.log('num_1: ',num_1);
 const gradeOfStudent = (a)=>{
    if(a <=100 && a > 90){
        return `A Grade`;
    }
    else if(a < 90 && a >= 80){
        return `B Grade`;
    }
     else if(a < 80 && a >= 70){
        return `B Grade`;
    }
     else if(a < 70 && a >= 60){
        return `B Grade`;
    }
    else{
        return `F Grade`;
    }
}
const ans_2 = gradeOfStudent(num_1);
console.log(ans_2);