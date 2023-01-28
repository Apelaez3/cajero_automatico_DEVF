const userName = document.querySelector(".user");
const userPassword = document.querySelector(".password");
const submitBtn = document.querySelector(".btn-signIN");
var form = document.getElementById("myForm");
const labelsIntro = document.querySelector(".etiqueta");
const etiqueta = document.querySelector(".etiqueta");
const etiqueta2 = document.querySelector(".etiqueta2");

var usersData =[];

form.addEventListener("submit",function(event){
    event.preventDefault();

    let userInfo = {};

    userInfo.name = document.querySelector("#input_singIN").value;
    userInfo.password = document.querySelector("#inputPassword").value;
    userInfo.moneyBalance = document.querySelector("#inputMoney").value;
    usersData.push(userInfo);
    localStorage.setItem("usersData",JSON.stringify(usersData));
    console.log(usersData);


    

    form.reset();
})

 form.addEventListener("submit", function(){
   window.location.href = "welcome.html";
 })





    




