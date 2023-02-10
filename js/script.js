// Author:JOMOL GEORGE
// Date:09-02-2023
function validate() {
    let vname = /^[a-z A-Z]+$/;
    let nam = document.getElementById("fn").value;
    let mregx =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let eme = document.getElementById("em").value;
    let d = document.getElementById("dte").value;
    let nop = document.getElementById("p1").value;
    let person = /^[0-9,(20)]$/;
    let s=document.getElementById("p").value;
    // **************************************
    // if (!vname.test(nam)) {
    //     alert("Please enter your full name (first & last name).");
    //     return false;
    // } else if (vname == nam) {
    //     alert("Valid name given.");
    //     return false;
    // }
    // ************************************************
    if (nam == "") {
        document.getElementById("n").innerHTML =
            "empty feild, please enter the name";
        return false;
    } else if (!vname.test(nam)) {
        document.getElementById("n").innerHTML =
            "Please enter your full name (first & last name)";
        return false;
    }
    // else if (vname == nam) {
    //     alert("go to next feild");
    //     return false;
    // }
    else if (eme == "") {
        document.getElementById("eml").innerHTML = "empty field";
        return false;
    } else if (!mregx.test(eme)) {
        document.getElementById("eml").innerHTML = "Enter valid email id";
        return false;
    }else if(s=="select"){
        alert("select package");
        return false;
    }
     else if (d == "") {
        document.getElementById("dt").innerHTML = "empty feild, pick the date";
        return false;
    } else if (nop == "") {
        document.getElementById("np").innerHTML =
            "empty field, enter the count";
        return false;
    } else if (!person.test(nop)) {
        document.getElementById("np").innerHTML = "enter the integer value ";
        return false;
    } else if(
        document.getElementById("boating").checked==false&&
        document.getElementById("fooding").checked==false&&
        document.getElementById("sightseeing").checked==false
    ){
        document.getElementById("ch").innerHTML = "choose any option"; 
        return false;
    }
    else if(
        document.getElementById("agree").checked==false&&
        document.getElementById("diss").checked==false
    ){
        alert("please confirm your status");
        return false;
    }
    
    else{
        return true;
    }
}
