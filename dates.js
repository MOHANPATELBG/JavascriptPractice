// practice dates
const today = new Date();
console.log("Today's date is:", today.toDateString());
console.log("Current time is:", today.toTimeString());
console.log("Year:", today.getFullYear());
console.log("Month (0-11):", today.getMonth()+1); 
console.log("Date:", today.getDate());

const specificDate = new Date('2022-12-25T10:30:00');
console.log("Specific date is:", specificDate.toDateString());
console.log("Specific time is:", specificDate.toTimeString());
console.log("Day of the week (0-6):", specificDate.getDay()+1);   
specificDate.setFullYear(2023);
console.log("Updated year for specific date:", specificDate.getFullYear()); 
console.log("Specific date after year update:", specificDate.toDateString());
console.log("Specific time after year update:", specificDate.toTimeString());

console.log("Milliseconds since January 1, 1970:", today.getTime());

// Date arithmetic
const futureDate = new Date();
futureDate.setDate(today.getDate() + 10);
console.log("Date after 10 days:", futureDate.toDateString());  
const pastDate = new Date();
pastDate.setMonth(today.getMonth() - 2);
console.log("Date 2 months ago:", pastDate.toDateString());
console.log("Is specific date in the future?", specificDate > today);
console.log("Is specific date in the past?", specificDate < today);
console.log("Difference in days between specific date and today:", Math.floor((specificDate - today) / (1000 * 60 * 60 * 24)));

