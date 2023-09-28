
function btn_click(item) {
    //alert(item.id);
    const operators= "+-x/";
    let button = item.id;
    let formula = document.getElementById("cal_screen").textContent;
    let last = formula.substr(formula.length-1);
    // C button
    if (button == "C"){
        document.getElementById("cal_screen").innerHTML="0";
        // switch mode to initial page
        switchmode(1);
        return;
    }
    if (button== "="){
        // remove the last letter if it is an operator
        if (operators.indexOf(last)>-1) { 
            formula=formula.substr(0,formula.length-1);
        }
        formula=formula.replaceAll("x","*"); // change x with * to use eval() function
        document.getElementById("cal_screen").innerHTML=calculation(formula);
        // switch mode to ready for a new calculation.
        switchmode(2);
        return;
    }
    // operator buttons
    if (operators.indexOf(button)>-1){
        if (operators.indexOf(last)>-1){ // replace the last operator with the click button 
            formula=formula.substr(0,formula.length-1);
        }
        switchmode(1); // this is the new calculation status
        formula=formula + button;
        document.getElementById("cal_screen").innerHTML=formula;
        return;
    }
    // first click a number after loading initial page
    if ((last =="0" && formula.length==1)){
        formula="";
        formula=formula + button;
        document.getElementById("cal_screen").innerHTML=formula;
        return;
    }
    // numberic buttons
    if (operators.indexOf(button)<0){
        if (getmode()==2) { // begin a new calculation
            formula="";
            formula=formula + button;
            document.getElementById("cal_screen").innerHTML=formula;
            switchmode(1);
        }else{
            formula=formula + button;
            document.getElementById("cal_screen").innerHTML=formula;
        }
        return;
    }
}
function calculation(s){
    result = eval(s);
    return result;
}

function switchmode(m){
    document.getElementById("new_screen").innerHTML=m;
}
function getmode(){
    let a = document.getElementById("new_screen").textContent;
    return a;
}