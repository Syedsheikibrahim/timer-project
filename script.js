const syed=document.querySelector(".start");
const sheik=document.querySelector(".stop");
const ibu=document.querySelector(".reset");

let hrs=min=sec=ms=0,startTimer;
syed.addEventListener('click',()=>{
    syed.classList.add('start-active');
    sheik.classList.remove('stop-active');
    startTimer=setInterval(()=>{
   ms++;
   if(ms==100){
    sec++;
    ms=0;
     }
     if(sec==60){
        min++;
        sec=0;
         }
         if(min==60){
            hrs++;
            min=0;
             }
         
   updateDisplay();
},10);
});

sheik.addEventListener('click',()=>{
clearInterval(startTimer);
syed.classList.remove('start-active');
sheik.classList.add('stop-active');
});

ibu.addEventListener('click',()=>{
    hrs=min=sec=ms=0;
    clearInterval(startTimer);
    updateDisplay();
    syed.classList.remove('start-active');
sheik.classList.remove('stop-active');
});


function updateDisplay(){
    phrs=hrs<10?'0'+hrs:hrs;
    pmin=min<10?'0'+min:min;
    psec=sec<10?'0'+sec:sec;
    pms=ms<10?'0'+ms:ms;
    document.querySelector(".hrs").innerText=phrs;
    document.querySelector(".min").innerText=pmin;
    document.querySelector(".sec").innerText=psec;
    document.querySelector(".ms").innerText=pms;
}