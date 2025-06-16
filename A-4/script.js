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

