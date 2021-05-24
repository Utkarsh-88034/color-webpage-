// HAMBURGER MENU STARTS

function hamtransform(){
    let bar1 = document.getElementById("bar1");
    let bar2 = document.getElementById("bar2");
    let bar3 = document.getElementById("bar3");
    let nav = document.getElementById("navmenu");
    if(bar3.style.opacity != "0"){
        nav.classList.add("active")
        bar1.style.transform = "translate(0,8px) rotate(225deg)";
        bar2.style.transform = " rotate(-225deg)";
        bar3.style.opacity = "0"
        

    }
    else{
        nav.classList.remove("active")
        bar1.style.transform = "none";
        bar3.style.opacity = "1";
        bar2.style.transform = " none";
        
    }
}
// HAMBURGER MENU CLOSE