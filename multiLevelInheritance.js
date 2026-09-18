// multi-level Inheritance in JavaScript 
// In multi-level inheritance, a class is derived from another class, which is also derived from another class. 
// This creates a chain of inheritance where the child class inherits properties and methods from its parent class, 
// and the parent class inherits from its own parent class, and so on.
class one {
    noida() {
        console.log(`This is in Noida.`);
    }
}

class two extends one {
    delhi() {
        console.log(`This is in Delhi.`);
    }
}

class three extends two {
    hyderabad() {
        console.log(`This is in Hyderabad.`);
    }
}


let t1 = new three();
t1.noida();
t1.delhi();
t1.hyderabad();
