
/////////////////////////////////////////////afzodan mahsol mahsolat 
var i = 1;
function useIt() {

    var temp1 = document.getElementById("mahsol").content;
    var copyhtml = document.importNode(temp1, true);
    // var clon = temp.content.cloneNode(true);
    var docadd = document.getElementById("product")
    copyhtml.querySelector(".product__text").textContent = "سوسیس آلمانی و پنیر " + i++;

    copyhtml.querySelector(".product__text");

    docadd.appendChild(copyhtml);


}










var orders = 1;
var lblorders = document.getElementById("product__detail-number11");
lblorders.innerHTML = orders;

function mosbat() {

    orders++;
    lblorders.innerHTML = orders;
    alltedad();
}
function manfi() {
    if (orders > 1) {
        orders--;
        lblorders.innerHTML = orders;
        alltedad();
    }
    else {
        alert("حداقل باید یک مورد را انتخاب کنید ");
    }
}


var orders2 = 1;
var lblorders2 = document.getElementById("product__detail-number2");
lblorders2.innerHTML = orders2;

function mosbat2() {

    orders2++;
    lblorders2.innerHTML = orders2;
}
function manfi2() {
    if (orders2 > 1) {
        orders2--;
        lblorders2.innerHTML = orders2;
    }
    else {
        alert("حداقل باید یک مورد را انتخاب کنید ");
    }
}





//////////////////// outo mosbat //////////////////////////////////////


var orders3 = 1;
var lblorders3 = document.getElementById("product__detail-number3");
lblorders3.innerText = orders3;

document.getElementById("product__detail-Positive2").onmousedown = plus, onmouseup = clear1;
document.getElementById("product__detail-Negative2").onmousedown = outomanfi, onmouseup = clear1;

var n;
var timem = 1000;
var orders3 = 1;
var timeoutID;
var timeinID;
function outomosbat() {

    timeoutID = setInterval(plus, timem);
}
function outomanfi() {

    timeinID = setInterval(Negative, timem);
}



function plus() {

    orders3++;
    time = timem - 100;
    lblorders3.innerHTML = orders3;
    if (timem > 100) {
        timem = timem - 100;

        delay();
    }
}


function Negative() {

    orders3--;
    time = timem - 100;
    lblorders3.innerHTML = orders3;
    if (timem > 100) {
        timem = timem - 100;

        delay();
    }
}

function delay() {
    clearTimeout(timeoutID);
    clearTimeout(timeinID);
    outomosbat();
}


function clear1() {
    clearTimeout(timeoutID);
    clearTimeout(timeinID);

    timem = 1000;
}


