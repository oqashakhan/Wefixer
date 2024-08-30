
setTimeout(() => {
  
    document.getElementById("form").classList.toggle("show");
    
}, 5000);

let close = document.getElementById("close").addEventListener("click" ,()=>{
    document.getElementById("form").classList.toggle("show");
})


