

    // Taking input of form via. id name


function handle(event) {
  event.preventDefault();

    
    #balance = 0;
    #pin;
    constructor(name, pin){
        ((this.name = name), (this.#pin = +pin));
    }

    cashDeposit(balance){
        this.#balance += balance;
        return `this is your Current balace: ${this.#balance}`;
    }

    cashWithdraw(balance, pin){
        pin = +pin;
        if(pin == this.#pin){
            if(balance <= this.#balance){
                this.#balance = this.#balance - balance;
                return `your amut has deducted ${balance} & currently your Balance is : ${this.#balance}`;
            }
            else{
                return `Insufficient Balance your current Balanace ${this.#balance}`            
            }
        }
    else{
        console.log(`Kindly check your Pin ${pin} is not Valid`)
    }
    }

}


const user = new Bank('Punit', 2004);
console.log('User detail: ',user);

let ans = user.cashDeposit(20000);

let ans1 = user.cashWithdraw(20000, 2004);
console.log(ans1)