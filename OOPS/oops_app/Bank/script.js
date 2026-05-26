// Creating Bank Class

class Bank {

    // Private properties
    #balance = 0;
    #pin;

    // Constructor
    constructor(name, pin) {
        this.name = name;
        this.#pin = Number(pin);
    }

    // Deposit Method
    cashDeposit(amount) {

        this.#balance += amount;

        return `Current Balance: ${this.#balance}`;
    }

    // Withdraw Method
    cashWithdraw(amount, pin) {

        pin = Number(pin);

        // Check pin
        if (pin === this.#pin) {

            // Check balance
            if (amount <= this.#balance) {

                this.#balance -= amount;

                return `₹${amount} deducted. Current Balance: ₹${this.#balance}`;
            }
            else {
                return `Insufficient Balance. Current Balance: ₹${this.#balance}`;
            }

        }
        else {
            return `Invalid Pin`;
        }
    }
}


// Create User
const user = new Bank('Punit', 2004);

// Add money first
user.cashDeposit(20000);


// Form Function
function handle(event) {

    event.preventDefault();

    // Get input values
    let amount = Number(document.getElementById('amount').value);

    let pin = document.getElementById('pin').value;

    // Withdraw money
    let result = user.cashWithdraw(amount, pin);

    console.log(result);

     // Select result div
    let resultDiv = document.querySelector('.result');

    // Display result
    resultDiv.innerText = result;
}