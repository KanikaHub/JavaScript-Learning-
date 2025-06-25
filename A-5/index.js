
console.log("Q-1");

let pattern = "";

for (let i = 1; i <= 6; i++) {
 
  for (let j = i; j <= i; j++) {

    pattern += " * ";

  }
  console.log(pattern);
}
// ---------------------------------------------------
console.log("Q-2");


let pattern1 = "";
for (let i = 1; i <= 45; i++) {
    if (i%3 ==0 && i%5==0){
        pattern1 += " Fizbuzzz  ";
    }else if (i%3 == 0){
        pattern1 += " Fizz ";
        }else if (i%5 == 0){
            pattern1 += " Buzz ";
            }
            else{
                pattern1 += " " + i + " ";
                }
                console.log(pattern1);
}

// ---------------------------------------------------
console.log("Q-3");
//sum of all number 
var numbersArray = [1,13,22,123,49];
let sum = 0 ;
for(let i = 0 ; i <numbersArray.length; i++){
        sum+= numbersArray[i];
}
console.log("sum of the array : ",sum);

// ---------------------------------------------------
console.log("Q-4");

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
let sum1=0;
let sum2=0;
let totalSum=0;

for(let i = 0 ; i <arr_1.length; i++){
        sum1+= arr_1[i];
}
console.log("arr1sum :",sum1);

for(let j = 0 ; j <arr_2.length; j++){
        sum2+= arr_2[j];
}
console.log("arr2 sum :" ,sum1);
totalSum=sum1+sum2;
console.log("total sum of :", totalSum );

// ---------------------------------------------------
console.log("Q-5");


let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
let result=""
for (let i = arr.length - 1; i >= 0; i--) {
 result += arr[i] + " ";
    // console.log(arr[i]);
}
console.log(result);




