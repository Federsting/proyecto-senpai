const botones = document.querySelectorAll(".boton");
const click = function (event) {
    alert("¡Reserva exitosa!");

}

botones.forEach(botones => {
    botones.addEventListener("click", click)
});