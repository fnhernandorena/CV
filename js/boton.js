const boton = document.getElementById("boton");
const naveg = document.getElementById("naveg");
const btnClose = document.getElementById("btn-close");
boton.addEventListener("click", () => {
    naveg.style.visibility = "visible"
    btnClose.style.visibility = "visible"
    boton.style.visibility = "hidden"
});

btnClose.addEventListener("click", () => {
    naveg.style.visibility = "hidden"
    btnClose.style.visibility = "hidden"
    boton.style.visibility = "visible"   
});

