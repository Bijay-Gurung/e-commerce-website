alert("Welcome to our Shop!"); //Welcome Message

//Change quote
const change  = document.querySelector("#change");
const quote = ["Boost Your Style Sense","Wear and Set Trends","Choose Happiness, Choose Clothes"];
let counter = 0;
setInterval(()=>{
    change.textContent = quote[counter];
    counter=(counter+1)% quote.length;
},3000);

//Toggle Button
function myFunction(){
    const element = document.body;
    element.classList.toggle("dark-mode");

    const button = document.querySelector("button");
    if(element.classList.contains("dark-mode")){
        button.textContent="Light";
    }else{
        button.textContent="Dark";
    }
}