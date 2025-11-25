//Static Methods and Variables in JavaScript
//Static methods and variables belong to the class itself rather than to any specific instance of the class.
//They are called on the class itself, not on instances of the class.   
//Defining a class with static methods and variables
class MathUtilities {
    //Static variable
    static pi = 3.14159;    
    //Static method to calculate the area of a circle
    static calculateCircleArea(radius) {
        return MathUtilities.pi * radius * radius;
    }
    //Static method to calculate the circumference of a circle
    static calculateCircumference(radius) {
        return 2 * MathUtilities.pi * radius;
    }   
    //Instance method (not static)
    displayInfo() {
        return 'This is a Math Utilities class.';
    }   
}
//Using static methods and variables without creating an instance
console.log(MathUtilities.pi); //Output: 3.14159
console.log(MathUtilities.calculateCircleArea(5)); //Output: 78.53975
console.log(MathUtilities.calculateCircumference(5)); //Output: 31.4159
//Creating an instance of the class to use instance methods
const mathUtilInstance = new MathUtilities();
console.log(mathUtilInstance.displayInfo()); //Output: This is a Math Utilities class.