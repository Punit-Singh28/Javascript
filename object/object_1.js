// CRUD Operaion
const Object ={
    name: 'Punit',
    Age: 21
};
console.log("My Object: ",Object);

// create
Object.email = "Punit@gmail.com";
Object.contry = "India";
Object.hobby = ["Bgmi", "Chess"];
console.log("Object after create: ", Object);

// Update
Object.email = "Punit123@gmail.com";
// console.log("Object after update: ", Object);

// Delete
delete Object.email;
// console.log("Object After delete: ",Object);

// Read
// 'For in' loop always use in Object because for iteration ['.length' prototype is undefined in object]
for (const key in Object) {
    // console.log(`Key of Object = ${key}  ||  Value of Object = ${Object[key]}`);    
}

// Array
// 'for of' & 'for' loop always use in array
let arr = ["1", 2, 3];

for (const element of arr) {
    // console.log(`element of array element are ${element}`);
}