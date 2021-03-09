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
    alltedad();
}
function manfi2() {
    if (orders2 > 1) {
        orders2--;
        lblorders2.innerHTML = orders2;
        alltedad();
    }
    else {
        alert("حداقل باید یک مورد را انتخاب کنید ");
    }
}


function alltedad() {

    var tedad = orders + orders2 +orders3;
    document.getElementById("header-up__left-basket-number").innerHTML = tedad;
}



//////////////////// outo mosbat //////////////////////////////////////


var orders3 = 1;
var lblorders3 = document.getElementById("product__detail-number3");
lblorders3.innerHTML = orders3;

var n;
var timem = 1000;
var orders3 = 1;
var timeoutID;

function outomosbat() {

    timeoutID = setInterval(plus, timem);
}


function plus() {

    orders3++;
    alltedad()
    time = timem - 100;
    lblorders3.innerHTML = orders3;
    if (timem > 100) {
        timem = timem - 100;

        delay();
    }
}



function delay() {
    clearTimeout(timeoutID);

    outomosbat();
}


function clear1() {
    clearTimeout(timeoutID);
}


