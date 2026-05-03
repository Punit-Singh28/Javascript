// Method Encapsulation

class Account{
    #balance
    constructor(name, age, balance){
        ((this.name = name), (this.age = age), (this.#balance = balance));
    }
    showData(){
        return `${this.#balance}`;
    }
}

class Address extends Account{
    constructor(...value){
        super(...value);
        console.log(this);
        this.add = 'Mira Road'; 
    }
}

const acc = new Address('Punit', 21, 100000000000);
console.log('Your Account Details: ',acc);
console.log('Balance amount: ', acc.showData());

