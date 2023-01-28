let usersData = JSON.parse(localStorage.getItem("usersData"));
const money = document.querySelector(".balanceMoney");
const retirarBtn = document.querySelector(".retirar");
const ventana = document.querySelector(".window");
let usersData2 = usersData;
let moneyAvailable = parseInt(usersData2[usersData2.length - 1].moneyBalance);

localStorage.setItem("usersData2",JSON.stringify(usersData2));
// parrafo para crear label de usuario//

userLabel = document.createElement("p");
userLabel.classList += "userLabel";
userLabel.innerHTML = "Usuario";

// creacion de parrafo que contenga nombre de usuario//

userPrint = document.createElement("p");
userPrint.classList += "userPrint";
userPrint.innerHTML = usersData2[usersData2.length - 1].name;

// creacion de label de balance de dinero//

moneyLabel = document.createElement("p");
moneyLabel.classList += "moneyLabel";
moneyLabel.innerHTML = "Balance de dinero";

// creacion de parrafo que contiene balance de usuario// 

moneyBalance = document.createElement("p");
moneyBalance.classList += "moneyBalance";
moneyBalance.innerHTML = parseInt(usersData2[usersData2.length - 1].moneyBalance);

money.appendChild(userLabel);
money.appendChild(userPrint);
money.appendChild(moneyLabel);
money.appendChild(moneyBalance);

// funcion para retirar // 

retirarBtn.addEventListener("click", retiro)



function retiro(){

    this.removeEventListener("click",arguments.callee);
    retiroBalance = document.createElement("p");
    retiroBalance.classList += "retirarDinero";
    retiroBalance.setAttribute("id","elementsToDisable");
    retiroBalance.innerHTML = "Cuanto desea retirar?";
    ventana.appendChild(retiroBalance);

    retiroAmount = document.createElement("input");
    retiroAmount.classList += "retiroAmount";
    retiroAmount.setAttribute("id","elementsToDisable");
    retiroAmount.setAttribute("placeholder", " Ingrese monto a retirar");
    retiroAmount.setAttribute("type","number");
    ventana.appendChild(retiroAmount);

    

    windowBtn = document.createElement("div");
    windowBtn.setAttribute("id","elementsToDisable");
    windowBtn.classList += "contenedorBtn";
    ventana.appendChild(windowBtn);

    continueBtn = document.createElement("button");
    continueBtn.classList += "continuarBtn";
    continueBtn.setAttribute("type","button");
    continueBtn.innerHTML = "Continuar";
    windowBtn.appendChild(continueBtn);

    cancelBtn = document.createElement("button");
    cancelBtn.classList += "cancelBtn";
    cancelBtn.setAttribute("type","button");
    cancelBtn.innerHTML = "Cancelar";
    windowBtn.appendChild(cancelBtn);

    continueBtn.addEventListener("click", function() {
        var retirarAmountValue = parseInt(retiroAmount.value);
        localStorage.setItem("retirarAmountValue", retirarAmountValue);
        if (!isNaN(retirarAmountValue)){

            if(retirarAmountValue <= moneyAvailable){
                let saldo = moneyAvailable - retirarAmountValue;
                console.log(saldo);
                localStorage.setItem("saldo",saldo);
                window.location.href = "retiroScreen.html";
                return saldo;
            }else{
                alert("No posee fondos suficientes");
            }
        }else {
            alert("Ingrese el saldo a retirar");
        }
        

    });

    cancelBtn.addEventListener("click", cancelFunction);

    function cancelFunction(){
        window.location.href = "index.html";
    }


}

