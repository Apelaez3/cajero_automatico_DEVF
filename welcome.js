let usersData = JSON.parse(localStorage.getItem("usersData"));
const nextBtn = document.querySelector(".next");
const img = document.querySelector(".img_Inicio");
const welcomeIcon1 = document.querySelector(".welcomeIcon");



nextBtn.addEventListener("click",function(){

    localStorage.setItem("usersData",JSON.stringify(usersData));
    window.location.href = "userInterfaz.html";
})