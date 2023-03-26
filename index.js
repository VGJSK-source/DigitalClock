const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minutes");
const secondE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");
const dateElement = document.querySelector(".date");

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h>12){
        h = h-12;
        ampm = "PM";
    }

    h = h<10 ? "0"  +  h : h; 
    m = m<10 ? "0"  +  m : m;
    s = s<10 ? "0"  +  s : s;

    hourE1.innerText = h;
    minuteE1.innerText = m;
    secondE1.innerText = s;
    ampmE1,(innerText = ampm);
    setTimeout(()=>{
    updateClock()
    },1000);

}
updateClock();


function formatDate(date) {
       const  DAYS = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
       const MONTHS = ["jan","feb","mar","apr","may","jun","jul","aug","sept","oct","nov","dec"];

       return '${DAYS[date.getDay()]}';
       
    
       

}
