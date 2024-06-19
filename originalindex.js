let button1=document.querySelector(".b1");
let button2=document.querySelector(".b2");
let button3=document.querySelector(".b3");
let testimonial1=document.querySelector(".t1");
let testimonial2=document.querySelector(".t2");
let testimonial3=document.querySelector(".t3");
let menu=document.querySelector(".menu");
let menubar=document.querySelector(".menubar")
let navbar=document.querySelector(".navbar")
let close=document.querySelector(".closebutton");
list=navbar.childNodes[1].childNodes;
list.forEach((data)=>{
    data.addEventListener("click",()=>{
       setTimeout(()=>{
        menubar.style.right="-100%";
       },10)
    });
})
menu.addEventListener("click",()=>{
    menubar.style.right=0;
})
close.addEventListener("click",()=>{
    menubar.style.right="-100%";
})

let datavalue=document.querySelectorAll(".dnumber");
let duration=4000;
let container=document.getElementById("showup");
let actiavted=1;
window.addEventListener("scroll",()=>{
    if(scrollY>container.offsetTop-container.offsetHeight-500 && actiavted===1){
        actiavted=2;
        datavalue.forEach((data)=>{
            let startvalue=0;
            let endvalue=parseInt(data.getAttribute("data-val"));
            let interval=Math.floor(duration/endvalue);
            let counter=setInterval(()=>{
                startvalue+=1;
                data.textContent=startvalue;
                if(startvalue==endvalue){
                    clearInterval(counter);
                }
            },interval);
        });
    }
   
})


// console.log(datavalue);

button1.addEventListener('click',()=>{
    // console.log(button1.style);
    button1.style.backgroundColor="black";
    button2.style.backgroundColor="white";
    button3.style.backgroundColor="white";
    testimonial1.style.display="flex";
    testimonial2.style.display="none";
    testimonial3.style.display="none";
})
button2.addEventListener('click',()=>{
    // console.log(button1.style);
    button2.style.backgroundColor="black";
    button1.style.backgroundColor="white";
    button3.style.backgroundColor="white";
    testimonial2.style.display="flex";
    testimonial1.style.display="none";
    testimonial3.style.display="none";
    
})
button3.addEventListener('click',()=>{
    // console.log(button1.style);
    button3.style.backgroundColor="black";
    button2.style.backgroundColor="white";
    button1.style.backgroundColor="white";
    testimonial3.style.display="flex";
    testimonial2.style.display="none";
    testimonial1.style.display="none";
})