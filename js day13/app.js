console.log("start...");

function myfunction(cb) {
    setTimeout(() => {
        cb("myfunction timeout...");
    }, 2000);
}

myfunction(data => {
    console.log(data);
});

console.log("end...");
// by default javascript,is single threaded synchronous language. for time consuming TextTrackList, we write the code in asynchronous fashion....login functiom, get single video, get video list(asynchronous).
 // mixture of asynchronus and synchronus

console.log("Let's make maggie yayy!!!")

setTimeout(()=>{
    console.log("Maggieee bannn gyiiiiiiiii!!")
}, 5000)

setTimeout(()=>{
    console.log("Bas ban hi gyi almost...")
},3500)

setTimeout(()=>{
    console.log("Masala daal diya...")
},2000)

console.log("Paani boil kr diya..")