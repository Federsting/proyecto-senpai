const botones = document.querySelectorAll(".boton");
const click = function (event) {
    alert("┬íRegistro exitoso! Activa tu cuenta en tu email.");

}

botones.forEach(botones => {
    botones.addEventListener("click", click)
});