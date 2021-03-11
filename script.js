function calc(){
    let a = parseInt(document.querySelector("#value1").value);
    let b = parseInt(document.querySelector("#value2").value);
    let op = document.querySelector("#operator").value;
    let calculate;

    if(op == "add"){
        calculate = a + b;
    } else if (op == "sub"){
        calculate = a - b;
    } else if (op == "mul"){
        calculate = a * b;
    } else if (op == "div"){
        calculate = a / b;
    }

    document.querySelector("#result").innerHTML = calculate;
}