
document.getElementById("estado").addEventListener("change", function () {
    let selectedValue = this.value;
    document.getElementById("estadoSeleccionado").textContent =
        "Estado seleccionado: " + selectedValue;
});