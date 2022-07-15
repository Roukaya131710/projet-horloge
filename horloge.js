let date, heures, minutes, secondes;
function refrechClock(){
    date=new Date();
    heures=date.getHours();
    minutes=date.getMinutes();
    secondes=date.getSeconds(); 
    document.querySelector(".heures").style.transform=`translate(-50%,-100%) rotate(${heures * 360/12}deg)`;
    document.querySelector(".minutes").style.transform=`translate(-50%,-100%) rotate(${minutes* 360/60}deg)`;
    document.querySelector(".secondes").style.transform=`translate(-50%,-100%) rotate(${secondes * 360/60}deg)`;

   // console.log(date , heures,"++++++++++++++++", minutes ,"+++++++++++" ,  secondes)
}
window.setInterval(refrechClock,1000)