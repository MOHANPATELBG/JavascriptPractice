//encapsulation: In object-oriented programming, encapsulation is the principle of bundling data (attributes) and methods (functions) that operate on that data within a single unit or class. 
// It restricts direct access to some of an object's components, which can prevent the accidental modification of data. Encapsulation is often implemented using access modifiers like private, 
// protected, and public.
//Encapsulation in JavaScript using classes
class BankAccount {
    //Private properties
    #accountNumber;
    #balance;   
    //Constructor to initialize the account
    constructor(accountNumber, initialBalance) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance;
    }   
    //Public method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }   
    //Public method to withdraw money   
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}`);
        } else {
            console.log('Invalid withdrawal amount.');
        }   
    }   
    //Public method to check balance    
    getBalance() {
        return this.#balance;
    }   
    //Public method to get account number
    getAccountNumber() {
        return this.#accountNumber;
    }   
}
//Creating an instance of BankAccount
const myAccount = new BankAccount('123456789', 1000);
//Using public methods to interact with the account
console.log(`Account Number: ${myAccount.getAccountNumber()}`);
console.log(`Initial Balance: $${myAccount.getBalance()}`);
myAccount.deposit(500);
console.log(`Balance after deposit: $${myAccount.getBalance()}`);
myAccount.withdraw(200);
console.log(`Balance after withdrawal: $${myAccount.getBalance()}`);
//Attempting to access private properties directly (will result in error)
//console.log(myAccount.#balance); //Uncommenting this line will throw a SyntaxError
//console.log(myAccount.#accountNumber); //Uncommenting this line will throw a SyntaxError
//The private properties #balance and #accountNumber cannot be accessed directly from outside the class, demonstrating encapsulation.   
//All interactions with the account must go through the public methods provided by the class.
//This ensures that the internal state of the BankAccount object is protected and can only be modified in controlled ways.      
//Output:
//Account Number: 123456789
//Initial Balance: $1000            
//Deposited: $500       
//Balance after deposit: $1500
//Withdrew: $200
//Balance after withdrawal: $1300           
