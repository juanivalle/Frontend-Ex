const optionMenu = document.querySelector(".menu-perfil"),
        selectBtn = optionMenu.querySelector(".select-btn"),
        opciones = optionMenu.querySelectorAll(".opcion"),
        boton = optionMenu.querySelector(".boton");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

opciones.forEach(opcion => {
    opcion.addEventListener("click", ()=> {
        let selectedOpcion = opcion.querySelector(".opcion-text").innerText;
        boton.innerText = selectedOpcion;
        
        optionMenu.classList.remove("active");
    })})
