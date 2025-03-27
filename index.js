function zero(){
    document.querySelector("input").value+="0";
}
document.querySelectorAll("button")[12].addEventListener("click",zero);

function one(){
    document.querySelector("input").value+="1";
}
document.querySelectorAll("button")[10].addEventListener("click",one);

function two(){
    document.querySelector("input").value+=2;
}
document.querySelectorAll("button")[9].addEventListener("click",two);

function three(){
    document.querySelector("input").value+=3;
}
document.querySelectorAll("button")[8].addEventListener("click",three);

function four(){
    document.querySelector("input").value+=4;
}
document.querySelectorAll("button")[6].addEventListener("click",four);

function five(){
    document.querySelector("input").value+=5;
}
document.querySelectorAll("button")[5].addEventListener("click",five);

function six(){
    document.querySelector("input").value+=6;
}
document.querySelectorAll("button")[4].addEventListener("click",six);

function seven(){
    document.querySelector("input").value+=7;
}
document.querySelectorAll("button")[2].addEventListener("click",seven);

function eight(){
    document.querySelector("input").value+=8;
}
document.querySelectorAll("button")[1].addEventListener("click",eight);

function nine(){
    document.querySelector("input").value+=9;
}
document.querySelectorAll("button")[0].addEventListener("click",nine);

function div(){
    document.querySelector("input").value+="/";
}
document.querySelectorAll("button")[3].addEventListener("click",div);

function mult(){
    document.querySelector("input").value+="*";
}
document.querySelectorAll("button")[7].addEventListener("click",mult);

function sub(){
    document.querySelector("input").value+="-";
}
document.querySelectorAll("button")[11].addEventListener("click",sub);

function add(){
    document.querySelector("input").value+="+";
}
document.querySelectorAll("button")[15].addEventListener("click",add);

function clear(){
    document.querySelector("input").value="";
}
document.querySelectorAll("button")[14].addEventListener("click",clear);

function result(){
    var num=document.querySelector("input").value;
    num=eval(num);
    document.querySelector("input").value=num;
    console.log(num);
}
document.querySelectorAll("button")[13].addEventListener("click",result);
