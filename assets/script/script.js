const header = document.querySelector("#header");
const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("#nav");
const contactForm = document.querySelector("#contactForm");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);
  const nome = data.get("nome");
  const telefone = data.get("telefone");
  const negocio = data.get("negocio");

  const message = `Olá, Matheus! Quero uma análise gratuita.%0A%0ANome: ${encodeURIComponent(nome)}%0ATelefone: ${encodeURIComponent(telefone)}%0ATipo de negócio: ${encodeURIComponent(negocio)}`;
  window.open(`https://wa.me/5581985951057?text=${message}`, "_blank");
});
