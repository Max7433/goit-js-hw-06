const input = document.querySelector("input#font-size-control");
const alfaRomeo = document.querySelector("span#text");

input.addEventListener("change", (e) => {
  alfaRomeo.style.fontSize = `${e.target.value}px`;
  alfaRomeo.style.color = "#f44336";
  alfaRomeo.style.textTransform = "uppercase";
});
