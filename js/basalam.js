
/////////////////////////////////////////////afzodan mahsol mahsolat 
var i = 1;
function useIt() {
    
        // var temp = document.getElementById("template")[0];
        // var clon = temp.content.cloneNode(true);
       
        // // clon.querySelector(".product__text").textContent="hi";


       
        // var add= document.getElementById("product").appendChild(clon);
      

        
       
        var temp1 = document.getElementById("mahsol").content;
        var copyhtml =document.importNode(temp1,true);
        // var clon = temp.content.cloneNode(true);
          var docadd=document.getElementById("product")
          copyhtml.querySelector(".product__text") .textContent="سوسیس آلمانی و پنیر " ;

          copyhtml.querySelector(".product__text") ;
        
        docadd.appendChild(copyhtml);
       
        
  }
// */

//   function useIt1() {
// //     // if(docadd.hasChildNodes()) {
// //         // var nodes = docadd.childNodes;
        
// //         // // Loop through node list and display node name
// //         // for(var iw = 0; i < nodes.length; i++) {
// //             alert(docadd.nodeName);

// var childElem = document.getElementById("product");
// docadd.removeChild(childElem);

// //         }
//         }
    // // }
/*
<div id="main">
    <h1 id="title">My Heading</h1>
    <p id="hint"><span>This is some text.</span></p>
</div>

<script>
var main = document.getElementById("main");

// First check that the element has child nodes 
if(main.hasChildNodes()) {
    var nodes = main.childNodes;
    
    // Loop through node list and display node name
    for(var i = 0; i < nodes.length; i++) {
        alert(nodes[i].nodeName);
    }
}
</script>

   
    
}


*/

























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

document.getElementById("product__detail-Positive2").onmousedown=plus ,onmouseup=clear1;
document.getElementById("product__detail-Negative2").onmousedown=outomanfi ,onmouseup=clear1;

var n;
var timem = 1000;
var orders3 = 1;
var timeoutID;
var timeinID;
function outomosbat() {

    timeoutID = setInterval(plus, timem);
}
function outomanfi(){

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


function Negative(){
    
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


