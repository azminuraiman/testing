const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  menuButton.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".package-button").forEach((button) => {
  button.addEventListener("click", () => {
    const packageName = button.dataset.package;
    document.querySelector("#package-select").value = packageName;

    document.querySelector("#contact").scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.querySelector("#booking-form").addEventListener("submit", (event) => {
  event.preventEvent();
  alert("Terima kasih! Permintaan tempahan anda telah diterima.");
  event.target.reset();
});