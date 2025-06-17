console.log("A-4");

console.log("Q-1");
var size = parseInt(prompt("Enter the size of the array: "));
var arr = [];

for (var i = 0; i < size; i++) {
    arr[i] = parseInt(prompt("Enter element " + i + " of the array: "));
}

function Find_Prod(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}

console.log("Product of array elements:", Find_Prod(arr));

console.log("------------------------------");
console.log("Q-2");
var size = parseInt(prompt("Enter the size of the array: "));
var arr = [];

for (var i = 0; i < size; i++) {
    arr[i] = parseInt(prompt("Enter element " + i + " of the array: "));
}

function add(arr){
    var sum = 0;
    for(var i = 0 ;i<arr.length;i++){
        sum = sum + arr[i];
    };
    return sum;
};
console.log("sum : "+add(arr));

console.log("------------------------------");
console.log("Q-3");

let A = [3, 3,3,3,3,3,3,3,1,1,1,2,2,2,2, 2];
let K = 3;
let N=1;
let I=2;

console.log("count K :"+findCount(A, K));
console.log("count N :"+findCount(A, N));
console.log("count I :"+findCount(A, I));

function findCount(arr, target) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}
console.log("------------------------------");
console.log("Q-4");


let n= 7;
let a=[1,2,3,4,5,6,7];

function findEvenOdd(a){
    let evenSum=0;
    let oddSum=0;

    for (let i=0 ; i<a.length;i++){
        if (a[i]%2==0){
            evenSum = evenSum + a[i];
        }else {
            oddSum = oddSum + a[i];
        }
    }
let b=[evenSum,oddSum];

return b

}

console.log("even values , odd values "+findEvenOdd(a));

console.log("------------------------------");
console.log("Q-5");
let num = [1,2,3,4,5];
let findThis = 2 

function findNumber(){
    for (let i =0; i<num.length;i++){
        if (num[i]===findThis){
            return "Yes";
        }
    }
    return "No";
} 
console.log( findNumber(num,findThis)+ " Available ");


console.log("------------------------------");
console.log("Q-6");

let num1=[18,22,24,53,54,2,4,9];

function highAge(num1){
    let result =[];
    for (let i =0; i<num1.length ; i++){
        if (num1[i]>=18){
            result.push(num1[i])
        }
    }
    return result;
    
}

function lowAge(num1){
    let result =[];
     for (let i =0; i<num1.length ; i++){
         
        if (num1[i]<18){
            result.push(num1[i])
        }
    }
    return result;

    }
let output1 = highAge(num1)
let output2 = lowAge(num1)
console.log("higher num are :" + (output1));
console.log("lower num are :" + (output2));

console.log("------------------------------");
console.log("Q-7");
let arr = [1,2,3,4,5,];

function incArr(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i]=arr[i]+1;

    }
    console.log("the increment array :"+(arr.join(" , ")));
    
}
incArr(arr);

console.log("------------------------------");
console.log("Q-8");

let marks=[13, 89, 45, 98, 67, 45, 54,]
let marks2 = [32, 89, 45, 98, 67, 45, 54];

function passInMaths(marks){
    for (let i = 0 ; i < marks.length ; i++){
        if (marks [i] < 32){
            return "no -failed"
        }
    }
return "yes-passed" ;
}
console.log(passInMaths(marks));
console.log(passInMaths(marks2));

console.log("------------------------------");
console.log("Q-9");

function uniqueShirts(colors) {
  let freq = {};
  for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    freq[color] = (freq[color] || 0) + 1;
  }
  let count = 0;
  for (let color in freq) {
    if (freq[color] === 1) {
      count++;
    }
  }
  return count;
}
let shirts = [3, 2, 4, 1, 2, 3];
console.log("Unique color shirts left:", uniqueShirts(shirts));

console.log("------------------------------");
console.log("Q-10");
function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return [min, max];
}

let nums = [66, 33, 11, 44, 66, 22, 77];
let [min, max] = findMinMax(nums);
console.log("Min:", min, "Max:", max);












