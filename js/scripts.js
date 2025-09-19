// Pausar la animación del ticker al pasar el ratón por encima
document.addEventListener("DOMContentLoaded", function() {
  const ticker = document.querySelector(".ticker");

  ticker.addEventListener("mouseenter", function() {
    ticker.style.animationPlayState = "paused";
  });

  ticker.addEventListener("mouseleave", function() {
    ticker.style.animationPlayState = "running";
  });
});

