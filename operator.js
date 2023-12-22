function sum(){
    var a=document.getElementById("t1").value;
    var b=document.getElementById("t2").value;
    var total=parseInt(a)+parseInt(b);

    document.getElementById("result").innerHTML=total;

}

function substract(){
    var a=document.getElementById("t1").value;
    var b=document.getElementById("t2").value;
    var remain=parseInt(a)-parseInt(b);

    document.getElementById("result").innerHTML=remain;

}

function multiply(){
    var a=document.getElementById("t1").value;
    var b=document.getElementById("t2").value;
    var multi=parseInt(a)*parseInt(b);

    document.getElementById("result").innerHTML=multi;

}

function divide(){
    var a=document.getElementById("t1").value;
    var b=document.getElementById("t2").value;
    var div=parseInt(a)/parseInt(b);

    document.getElementById("result").innerHTML=div;

}