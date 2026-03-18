// const pro = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("promise resolved")
//     }, 3000)
// })

// function getData(){
//     pro.then((res) => console.log(res));
//     console.log("After promise");
// }

// getData();

// output will be
// After promise
// promise resolved



const pro = new Promise((res, rej) => {
    setTimeout(() => {
        res("promise resolved")
    }, 3000)
})

async function getData(){
    const value = await pro;
    console.log(value);
}

getData();

// output will be
// promise resolved
const pro = new Promise((res, rej) => {
    setTimeout(() => {
        let payment = false;

        if (payment === true)
            res("Payment Done");
        else
            rej("Payment failed");
    }, 3000);
});

async function getData() {
    try {
        const value = await pro;
        console.log(value);
        console.log("Dashboard Access given");
    }
    catch(err){
        console.log(err);
        console.log("Access denied");
    }
}

getData();

// API key : Access token ,which gives you access to use the API


// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => console.log(data))


// async function fetchData(){
//     try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     return data;
//     }catch(error){
//         console.error(error);
//     }
// }
// fetchData()
// .then(data=>console.log(data))

// async function getData(){
//     const result = await fetchData();
//     console.log(result)
// }
// getData()

// async function fetchData(city){
//     const API_Key="af9f63c59a649f27d602b96a43d0bd14";
//     try{
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`);
//     const data = await response.json();

//     console.log(city);
//     console.log("Temp:",data.main.temp);
//     console.log("Humidity:",data.main.humidity);

//     }catch(error){
//         console.error(error);
//     }
// }
// fetchData("Gurugram")



async function fetchData(city){
    const API_Key="af9f63c59a649f27d602b96a43d0bd14";
    try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`);
    const data = await response.json();

    document.getElementById("result").innerHTML=
    `<h2>${data.name}</h2>
    <p>Temparature:${data.main.temp}</p>
    <p>Humidity:${data.main.humidity}</p>`
   }catch(error){
        console.error(error);
    }
}

function getWeather(){
    const city = document.getElementById("city").value;
    fetchData(city);
}
getWeather()





// Q. what is Event bubbling and event capturing