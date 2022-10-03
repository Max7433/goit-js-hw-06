const input = document.querySelector("#font-size-control");
const alfaRomeo = document.querySelector("#text");

input.addEventListener("change", (e) => {
  alfaRomeo.style.fontSize = `${e.target.value}px`;
  alfaRomeo.style.color = "#f44336";
  alfaRomeo.style.textTransform = "uppercase";
});
