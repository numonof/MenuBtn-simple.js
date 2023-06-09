const menuBTN =  document.querySelector(".menu-btn");
let menuOpen = false;
function OnClickBtn(){
    if (!menuOpen) {
        menuBTN.classList.add("active");
        menuOpen= true;
    }
    else{
        menuBTN.classList.remove("active");
        menuOpen= false;
    }
}