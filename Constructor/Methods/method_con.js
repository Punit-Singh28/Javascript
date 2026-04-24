// Created a Object

let user = {
    name: 'Punit'
}
console.log('before user Manipulation: ',user);

function Detail(name, age, skill){
    this.name = name;
    this.age = age;
    this.skill = skill;
    return this
}

// let user_val = Detail.call(user, 'India', 100, 'KGL ki maarna');  //CALL METHOD
// console.log('After user Manipulation: ',user);

// let user_val = Detail.apply(user, ['Pankaj', 20, "Influncer"]);   //APPLY METHOD
// console.log('Type of User', typeof user_val)
// console.log(user);

let user_bind = Detail.bind(user, 'Mohit', 19, 'Backchodi');   // Bind creates a Function
console.log('Type of User', typeof user_bind)
console.log('value', user_bind())
console.log(user)