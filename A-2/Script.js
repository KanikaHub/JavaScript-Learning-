// Q1. Find Grades

let marks = parseInt(prompt("Enter the marks : "));
let grade;
switch (true) {
  case marks <= 10:
    grade = "E";
    break;
  case marks >= 11 && marks <= 20:
    grade = "D";
    break;
  case marks >= 21 && marks <= 30:
    grade = "C";
    break;
  case marks >= 31 && marks <= 40:
    grade = "B";
    break;
  case marks >= 41 && marks <= 50:
    grade = "A";
    break;
  default:
    grade = "Invalid marks";
}
console.log("Grade:", grade);

//q-2
let table = {
  p: "PrepBytes",
  z: "Zenith",
  e: "Expert Coder",
  d: "Data Structure",
};

let key = prompt("Enter a key to get value: ");
key = key.toLowerCase(); 

console.log(table[key]);

//q-3
let num1 = parseInt(prompt("Enter first number: "));
            let num2 = parseInt(prompt("Enter second number: "));
            let num3 = parseInt(prompt("Enter third number: "));


            if (num1==num2==num3){
              console.log("All number are eqaual ");
                }
                else if(num1>num2 && num1>num3){
                console.log("Maximum number is: " + num1);
            }else if(num2>num3){
                console.log("Maximum number is: " + num2);
            }else{
                console.log("maximum number is: " + num3);
            }

//q-4
let x=22;
let y=33;
let z=67;

if (x>y ){
  console.log("x is greater" + x)

}else if (y>z){
 console.log("y is greater"+ y)
}else if (z>x){
  console.log("z is greater "+ z)
}

console.log("compare");

//q-5
let a = parseInt(prompt("Enter angle A:"));
let b = parseInt(prompt("Enter angle B:"));
let c = parseInt(prompt("Enter angle C:"));


if (a + b + c === 180 && a > 0 && b > 0 && c > 0) {
  if (a < 90 && b < 90 && c < 90) {
    console.log("acute");
  } else if (a > 90 || b > 90 || c > 90) {
    console.log("obtuse");
  } else {
    console.log("right triangle (optional case)");
  }
} else {
  console.log("Invalid triangle");
}




