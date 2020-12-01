var showed=0;
var mobile=0;
var is_mobile=700

var pc_width=75;
var pc_menu=25;

if (document.body.clientWidth<is_mobile){
    mobile=1;
}
else{
    mobile=0;
}

function render() {

//  document.getElementById('menu').style.transition = "all 200ms ease-in-out";
//  document.getElementById('page').style.transition = "all 200ms ease-in-out";
    if (showed != 1) { 
        if (mobile!=1){
        document.getElementById('page').style.width = pc_width+"%";
        document.getElementById('menu').style.width = pc_menu+"%";
        }
        else{
        document.getElementById('page').style.width = "100%";
        document.getElementById('menu').style.width = "100%";
        }
        document.getElementById('label').innerHTML = "X"
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
    }
}

function showHide() {
    if(showed!=1){
         showed=1;
    }
    else{
         showed=0;
    }
    render();
}

function screen_test(){
    if (document.body.clientWidth<is_mobile){
          mobile=1;
    }
    else{
          mobile=0;
    }
    render();
}

if(mobile!=0){
    showHide();
}
else{
    render();
}

setInterval(screen_test, 1000);
