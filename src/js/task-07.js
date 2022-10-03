const inputChange = document.querySelector("input#font-size-control");
const alfaRomeo = document.querySelector("span#text");

inputChange.addEventListener("change", (e) => {
  alfaRomeo.style.fontSize = `${e.target.value}px`;
  alfaRomeo.style.color = "#f44336";
  alfaRomeo.style.textTransform = "uppercase";
});
