const a = prompt("Please enter number value for a:");
const b = prompt("Please enter number value for b:");
const result = a%b;
if (result === 0){
    console.log ("Ділиться");
   } 
else {
    console.log (`Ділиться з залишком ${result}`);
}