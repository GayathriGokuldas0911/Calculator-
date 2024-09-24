var screen=document.getElementById('screen');


function btnclick(value){
    screen.value+=value;
}
function clearScreen(){
    screen.value = "";
}
function fresult(){
    var result=eval(screen.value);
    screen.value=result;
}

function fundelete(){
    var screen =document.getElementById('screen');
    screen.value=screen.value.slice(0,-1);
    }