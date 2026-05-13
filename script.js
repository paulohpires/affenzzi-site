// CURSOR CUSTOMIZADO

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (event) => {
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});

// CONTADOR ANIMADO

const counter = document.getElementById("counter");

let counterStarted = false;

function animateCounter() {
  let current = 0;
  const target = 1000;

  const timer = setInterval(() => {
    current += 125;

    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    counter.innerText = current.toLocaleString("pt-BR") + "+";
  }, 16);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !counterStarted) {
      counterStarted = true;
      animateCounter();
    }
  });
});

observer.observe(counter);

// HEADER BACKGROUND

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,.7)";
  } else {
    header.style.background = "rgba(0,0,0,.3)";
  }
});
