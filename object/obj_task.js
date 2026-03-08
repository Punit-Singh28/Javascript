const obj = {
    name: "Punit",
    age: 21,
    country: ["India", "Russia", "Japan"],
    hobby:{
        indore: "chess",
        Outdore: "Cricket"
    },
    passport: function(){
        const status = true;
        return status;
    }
};

for (const key in obj) {
    if(typeof obj[key] == 'function'){
        console.log(`values : Function || ans : ${obj[key]()}`);
    }
    else if(Array.isArray(obj[key])){
        for (const element of obj[key]) {
            console.log(`values : Array    || ans : ${element}`);
        }
    }else if(typeof obj[key] == 'object'){
       for (const cal in obj[key]) {
        console.log("values : object || ans:", cal);
       }
    }
    else{
        console.log(`values : rest all || ans : ${obj[key]}`);
    }
}