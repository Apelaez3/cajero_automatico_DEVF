let usersData2 = JSON.parse(localStorage.getItem("usersData2"));
let saldo = localStorage.getItem("saldo");
let retirarAmountValue = localStorage.getItem("retirarAmountValue");
const money = document.querySelector(".balanceMoney");
const retirarBtn = document.querySelector(".retirar");
const ventana = document.querySelector(".window");
let moneyAvailable = parseInt(usersData2[usersData2.length - 1].moneyBalance);

console.log(retirarAmountValue);
console.log(saldo);
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
moneyLabel.innerHTML = "Su saldo actual sera:";

// creacion de parrafo que contiene balance de usuario// 

moneyBalance = document.createElement("p");
moneyBalance.classList += "moneyBalance";
moneyBalance.innerHTML = saldo;

// creacion de titulo de puede retirar su dinero//

moneyRetire = document.createElement("h2");
moneyRetire.classList += "tittle";
moneyRetire.innerHTML = "Puede retirar su dinero" + " $ "+retirarAmountValue;

//creacion boton para regresar al inicio//

logout = document.createElement("button");
logout.classList += "logOutBtn";
logout.innerHTML = "Cerrar Sesion";

money.appendChild(userLabel);
money.appendChild(userPrint);
money.appendChild(moneyLabel);
money.appendChild(moneyBalance);
ventana.appendChild(moneyRetire);
ventana.appendChild(logout);

logout.addEventListener("click",logingOut);

function logingOut(){
    window.location.href = "index.html";
}