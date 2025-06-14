// Q-1
console.log("Q-1");

var str ="aAdsFLAIEvAja";
var B = [];
var A = 0;
var D = 0;
for (var i = 0; i < str.length; i++) {
  if (str[i] == "A") {
    A++;
  } else if (str[i] == "D") {
    D++;
  }
}
B.push(A, D);
console.log(B);

//q-2
console.log("Q-2");
let str = "captcha";
let arr1 =  str.split("").sort();
let finalarr = [];
for(let i = 0 ; i<arr.length; i++){
     let temp = arr[i];
     let first =  arr.indexOf(temp);
     let last =  arr.lastIndexOf(temp);
      i = last;
     let final = last-first+1;
     if(final >=2)
     finalarr.push(`${arr[i] + final}`);
};
console.log(arr1.join(""));

// Q-3
console.log("Q-3");
var str = "prepbytes";
var cnt = 0;
for(var i = 0 ;i<str.length; i++){
    var ch =  str[i].toLowerCase();
    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') cnt++;
};
console.log(cnt);

//Q-4
console.log("Q-4");
let str = "Prep";
let str3 = "Byte";
console.log(str.concat(str3));


//Q-5
console.log("Q-5");
let str ="kanika-verma";
let len = str.length;
console.log(len);


//Q-6
console.log("Q-6");
let s ="ADDDAAADDAA";
let countA = 0;
let countD = 0;
for(let i=0; i<s.length; i++){
    if(str[i] == "A"){
        countA++;
    } else{
        countD++;
    }
}
if(countA>countD){
    console.log("Aditya");
} else if(countA<countD){
    console.log("Danish");
} else{
    console.log("Draw");
}

//Q-7
console.log("Q-7");
let s1 = "Kanika";
let s2 = "Verma";
console.log(s1+s2);

//Q-8
console.log("Q-8");
let str = "namaAn"; 
let flag = true;

for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    flag = false;
    break;
  }
}

if (flag) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

//Q-9
console.log("Q-9");
let s3 = "I am utkarsh raj";
let res = s3.split("").reverse().join("");
console.log(res);

//Q-10
console.log("Q-10");
let w1 = "Prepbytes";
let w2= "Prepbytes";
if(w1 == w2){
    console.log("Yes");
}else{
    console.log("No");
}
//Q-11
console.log("Q-11");
let s4 = "Hi, I am You.You";
let pattern = "You";
let text = "Propbyte";
let res2 = s4.replaceAll(pattern, text);
console.log(res2);

//Q-12
console.log("Q-12");
var str = "I am kanika verma";
var arr = str.split(" ");
console.log(arr);

// Q-13
console.log("Q-13");
var str = "Prepbytes";
var vowels = 0;
var consonants = 0;

for(var i = 0 ;i<str.length; i++){
    var ch =  str[i].toLowerCase();

    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') vowels++;
    else consonants++;

};
console.log("Here are the vowels :"+ vowels);
console.log("Here are the Consonants :"+ consonants);







