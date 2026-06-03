const boton = document.getElementById("btnInicio");
const contenedor = document.querySelector(".contenedor");

boton.addEventListener("click", () => {

    document.body.classList.add("activo");

    boton.classList.add("ocultar");

    setTimeout(() => {
        boton.style.display = "none";
    }, 500);

    setTimeout(() => {
        contenedor.classList.remove("oculto");
        contenedor.classList.add("mostrar");
    }, 700);

});


const movimiento = document.querySelector(".movimiento");

movimiento.addEventListener("click", () => {

    movimiento.classList.toggle("tomar-mate");

});

