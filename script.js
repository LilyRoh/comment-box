function counter(text,length){
    var limit = length;
    var str = text.value.length;
    if(str>limit){
        document.getElementById('reCount').innerHTML = "over the limit";
        text.value = text.value.substring(0,limit);
        text.focus();
        document.getElementById('textbox').style.backgroundColor = 'red';
        document.getElementById('textbox').style.border = '10px solid yellow';
        
    }
    document.getElementById("reCount").innerHTML = text.value.length + "/" + limit;
}

function showComment(){
    var x = document.getElementById('textbox').value;
    document.getElementById('demo').innerHTML = x;
    
}