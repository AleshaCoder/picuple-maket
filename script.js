var showed=0;
var mobile=0;
if (window.screen.availWidth<700){
    mobile=1;
}

if(mobile!=1){
    showHide()
}

function showHide() {
    var obj = document.getElementById("menu"); 
    document.getElementById('menu').style.transition = "all 200ms ease-in-out";
    document.getElementById('page').style.transition = "all 200ms ease-in-out";
    if (showed != 1) { 
        if (mobile!=1){
        document.getElementById('page').style.width = "75%";
        document.getElementById('menu').style.width = "25%";
        }
        else{
        document.getElementById('page').style.width = "100%";
        document.getElementById('menu').style.width = "100%";
        }
        document.getElementById('label').innerHTML = "X"
        showed=1;
    }
    else{
        if (mobile!=1){
        document.getElementById('page').style.width = "100%";
        document.getElementById('menu').style.width = "0px";
        }
        else{
        document.getElementById('page').style.width = "100%";
        document.getElementById('menu').style.width = "0px";
        }
        document.getElementById('label').innerHTML = "M"
        showed=0;
    }
}
