const digit = document.querySelectorAll(".exp");
const result = document.querySelector(".result p");
const clear = document.querySelector(".c");
const clearEnd = document.querySelector(".ce");
const eq = document.querySelector(".equal");
// digit.forEach(d=>{
//    console.log(d.textContent);
// })
function appendText(val){
    if(result.textContent == "Infinity" || result.textContent == "Error" || result.textContent == "NaN"){
        result.textContent = "";
    }
    result.textContent += val;

}
clear.addEventListener("click",()=>{
    result.textContent = "";
})
clearEnd.addEventListener("click",()=>{
    result.textContent = result.textContent.slice(0, -1);
})
let ans = 0;
eq.addEventListener("click",()=>{
    try{
        result.textContent = eval(result.textContent);
    }
    catch{
        result.textContent = "Error";
    }
})