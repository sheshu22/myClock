let a;
let time,date;

setInterval(() => {
     a = new Date();
     time=a.toLocaleTimeString();
     date=a.toLocaleDateString();
document.querySelector("#print").innerHTML=time+"<br> Date: "+date +" (IST)";
}, 1000);

let btn=document.querySelector("#load");
btn.addEventListener("click",reload);

function reload()
{
    window.location.reload();
}

