function wait(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

document.querySelectorAll(".card").forEach((e) => {
  e.addEventListener("mouseenter", async () => {
    await wait(0.2);
    e.classList.toggle("flip");
  });
  e.addEventListener("mouseleave", async () => {
    await wait(0.1);
    e.classList.toggle("flip");
  });
});

document.querySelector(".hero").addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("hero_open");
});

async function start() {
  await wait(0.3);
  document.querySelector(".hero").classList.toggle("hero_open");
}
start();
