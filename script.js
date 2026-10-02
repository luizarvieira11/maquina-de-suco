function prepararSuco(numero, sabor) {
  const status = document.getElementById("status");

  status.textContent =
    "Sabor selecionado: " + sabor +
    ". Comando: " + numero +
    ". Máquina ainda não conectada.";
}