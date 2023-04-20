let menu = document.getElementById("menu");
let list = document.getElementById("list");
let con = document.getElementById("con");
let b = document.getElementsByTagName("body");
let x = 1;

menu.onclick = function(){
    if(x ==1 ){
        menu.classList.add("max-sm:bg-[url('./assets/images/icon-menu-close.svg')]");
        list.classList.remove("max-sm:hidden");
        x = 2
    }else{
        menu.classList.remove("max-sm:bg-[url('./assets/images/icon-menu-close.svg')]");
        list.classList.add("max-sm:hidden");

        x =1
    }
    
}