const botones = document.querySelectorAll(".boton");
const click = function (event) {
    alert("¡Revisa tu correo!");

}

botones.forEach(botones => {
    botones.addEventListener("click", click)
});