// function handleclick() {
//     document.querySelector("#head").style.color = "red";

//     document.getElementById("btn").textContent="Color changed"
// }
// q2
// const handleclick = () => {
//     const image= document.createElement("img");
//     image.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyxoM8du5cN5VvAXvnbrab6PbfkAAqjiyLbQ&s");
//     image.setAttribute("alt", "Placeholder image");
//     document.getElementById("content").append(image);
// }
// function handleChange() {
//            document.getElementById("output").textContent = "Change detected!";
//        }

// dom

document.getElementById("btn").addEventListener("click", () => {
    const image= document.createElement("img");
    image.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyxoM8du5cN5VvAXvnbrab6PbfkAAqjiyLbQ&s");
    image.setAttribute("alt", "Placeholder image");
    document.getElementById("content").append(image);
});