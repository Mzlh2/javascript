const nameinput = document.getElementById("myinput");
// console.log(nameinput);

// nameinput.addEventListener("change",()=>{
//     document.getElementById("output").textContent="chnage detected!";
//     console.log(nameinput.value);
// })
const courseinput = document.getElementById("course");
const form = document.getElementById("myform");
const output = document.getElementById("output");


courseinput.addEventListener("change",()=>{
    console.log(courseinput.value);
    // console.log(nameinput.value);
    // output.textContent=nameinput.value;
    output.textContent=courseinput.value;
})

form.addEventListener("submit",(event)=>{
    // to prevent the autorefresh
    event.preventDefault();   
    // console.log(event.target.value);
    const name = nameinput.value;
    const course = courseinput.value;
    console.log(name,course);
    output.textContent=name+course;
})    
