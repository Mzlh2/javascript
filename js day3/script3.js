/*let fruits=['apple', 'banana'];
let newLength=fruits.push('cherry');
console.log(newLength);
console.log(fruits) //['apple', 'banana', 'cherry']*/
/*let fruits = ["apple", "banana", "cherry"];
let removed = fruits.pop();
console.log(removed);
console.log(fruits);*/
/*let fruits = ["apple", "banana", "cherry"];
let removed = fruits.shift(); 
console.log(removed);
console.log(fruits);*/
/*let fruits = ["banana", "cherry"];
let newLength = fruits.unshift("apple");
console.log(newLength);
console.log(fruits);*/
//q2
let fruits = ["apple", "banana", "cherry"];
let reversed = [];
while (fruits.length > 0) {
  reversed.push(fruits.pop());
}
console.log(reversed);
/*let arr=[1,2,3,4,5]
let res=[]
while(arr.length>0){
    res.push(arr.pop());
}
console.log(res)*/
//q2
/*let arr=[3,5,-5,0,-1];
let posint=[]
while(arr.length>0){
    let val=arr.shift();
    if(val>=0){
        posint.push(val);
    }
}
console.log(posint);*/
function palindrome() {
  let arr = [1, 2, 3, 9, 1];
  let temp = [];
  let original = [];
  for (let i = 0; i < arr.length; i++) {
    original.push(arr[i]);
  }
  console.log(original);
  while (arr.length > 0) {
    temp.push(arr.pop());
  }
  console.log(temp, "temp");
  for (let i = 0; i < original.length; i++) {
    if (original[i] !== temp[i]) 
        return "not palindrome";
  }
  return "palindrome";
}
console.log(palindrome());
