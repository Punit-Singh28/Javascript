let val1 = 3;
let val2 = 7;
// console.log(val1 === 3 && val2 !== 3, "-----true")

let vala = 7;
let valb = 3;
// console.log(vala === 3 && valb !== 3, "-----false")

let flag = true;
// console.log(!!flag) 
// flag -> true; !flag= -> false; !!flag -> true

let flag1 = false;
console.log(!!flag1)
// flag1 -> false; !flag1 -> true; !!flag -> false

let binary = 10100;
console.log(binary);
// binary -> String; 10100 -> value; normally assigning value to string

let decimal = parseInt(binary, 2);
console.log(decimal);
/*
The parseInt(string, radix) function takes a string and a radix (the base).
Calculation: (1×2**4) + (0×2**3) + (1×2**2) + (0×2**1) + (0×2**0) = 16 + 0 + 4 + 0 + 0 = 20.
console.log(decimal); -> prints 20
*/

let octal = decimal.toString(8);
console.log(octal);
/* The .toString(radix) method does the opposite of parseInt. It takes a base-10 number and converts it into a string representation of another base.
Calculation: 20 divided by 8 is 2 with a remainder of 4. So, the result is 24
*/

let num = 88;
// console.log("num: ", num);
// console.log("value:", typeof num);

let newData = num.toString();
//num.toString change the datatype of variable [number -> String]

// console.log('newData:', newData);
// console.log(typeof newData);
//the typeof method shows the data type of variable

let newData1 = String(num);
//num String change the datatype of variable [number -> String]

// console.log(newData1);
// console.log(typeof newData1);

let newData2 = Number(num);
//num Number change the datatype of variable [number -> String]

// console.log(newData2);
// console.log(typeof newData2);

let decival = 20;
let ans = parseInt(decival,10);
console.log(ans)



