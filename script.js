function calc(){
    let a = parseInt(document.querySelector("#value1").value);
    let b = parseInt(document.querySelector("#value2").value);
    let op = document.querySelector("#operator").value;
    let calculate;

    if(op == "add"){
        calculate = a + b;
    } 
    else if (op == "sub"){
        calculate = a - b;
    } 
    else if (op == "mul"){
        calculate = a * b;
    } 
    else if (op == "div"){
        calculate = a / b;
    }
    else if (op == "exp"){
        calculate = Math.pow(a,b);
    }
    else if (op == "ran"){
        calculate = Math.random()*a;
    }
    else if (op == "mod"){
        calculate = a % b;
    }
    document.querySelector("#result").innerHTML = calculate;
}