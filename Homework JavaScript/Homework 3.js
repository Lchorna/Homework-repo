const currentSalary = prompt("Please enter your current salary:");
const yearsOfWork = prompt("Please enter how namy years do you work for the Company:");

let newSalary, increase, bonus;

if (yearsOfWork>=3){
    increase="20%";
    newSalary=1.2*currentSalary;
}
else {
    if (yearsOfWork<1) {
        newSalary=currentSalary;
        increase="0%";
    }
    else {
        newSalary=1.1*currentSalary;
        increase="10%";
    }
}

if (newSalary<4000) {
    bonus=1000;}
else {bonus=500;}

console.log (`Your salary has been increased by ${increase} making your new total of ${newSalary} plus ${bonus} one-time bonus`);
