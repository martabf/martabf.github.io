const root_theme = document.querySelector(":root");
const boton = document.getElementById("change-theme");

boton.addEventListener("click", () => {
  const styles = getComputedStyle(document.documentElement);
  const color = styles.getPropertyValue("--color-theme");

  if (color === "lightblue")
    root_theme.style.setProperty("--color-theme", "blueviolet");
  else root_theme.style.setProperty("--color-theme", "lightblue");
});
