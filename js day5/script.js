//let str = "java script is amazing";
//let sub = str.substring(2,11);
//console.log(sub)

//let firststr = "hello";
//let secstr = "world";
// let str = "java script is amazing";
// let sub = str.substring(2,11);
// console.log(sub)

// let firststi = "hello";
// let secstr = "world";
// let fullsen = firststr.concat(" ",secstr);
// console.log(fullsen)

// string literals

// let firststr = "shruti";
// let lastname = "soumya";

// let fullname = `${firststr} this is my first name and --> this is my last name ${lastname}`
// console.log(fullname)

let Fname = "Shruti Soumya";
let university = "K.R Mangalam";
let program = "BCA AI/DS";

let fullsentence = `My name is ${Fname} and i'm pursuing ${program} from ${university} Sohna road, Gurgaon `
console.log(fullsentence)

// Spread Operator

let arr = [1,2,3]
let arr2 = [4,5,6]
let fiarr = [...arr,...arr2]
console.log(fiarr)
let sentence = "I,am,a,comma,separated,sentence";
let words = sentence.split(",");