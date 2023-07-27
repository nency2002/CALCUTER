let input = document.getElementById("inputbox");

function display(num){
    inputbox.value += num;
}

function calculater(){
    inputbox.value = eval(inputbox.value);
}

function clere(){
    inputbox.value = "";
}

function del(){
    inputbox.value = inputbox.value.slice(0,-1);
}
