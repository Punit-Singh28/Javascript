
// hard-coded values

// const num_1 = 5;
// const num_2 = 5;
// const opt = '-';

// Dynamic values [Note: in terminal we have to give operator values of {*, **, /} in {'*', '**', '//'}]
// const num_1 = +process.argv[2];
// const num_2 = +process.argv[3];
// const opt = process.argv[4];

// Dynamic + html [Dom values]
const num_1 = +prompt("Enter value of Number-1 to perform calculation");
const num_2 = +prompt("Enter value of Number-2 to perform calculation");
const opt = prompt("Enter value of Operator to perform calculation");



const calcFunction = (data_1, data_2, opt) => {
    switch(opt)
    {
        case '+':
            return `You choose '${opt}' your result is: ${data_1 + data_2}`;
        case '-':
            return `You choose '${opt}' your result is: ${data_1 - data_2}`;
        case '*':
            return `You choose '${opt}' your result is: ${data_1 * data_2}`;
        case '/':
            if(data_2 == 0){
                return `do not insert 0 in denominator`;
            }
            return `You choose '${opt}' your result is: ${data_1 / data_2}`;
        case '%':
            if(data_2 == 0){
                return `do not insert 0 in denominator`;
            }
            return `You choose '${opt}' your result is: ${data_1 % data_2}`;
        case '**':
            return `You choose '${opt}' your result is: ${data_1 ** data_2}`;
        default:
            return `Please check and provide proper values for calculation "${data_1, data_2, opt}"`;
    }
}

const answer = calcFunction(num_1, num_2, opt);
console.log(answer);