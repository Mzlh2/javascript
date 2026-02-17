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
