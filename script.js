
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("active");

  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

// Close the menu after selecting a link
navbar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

// Animate hamburger into an X
const menuStyles = document.createElement("style");

menuStyles.textContent = `
  .menu-toggle.open span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .menu-toggle.open span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.open span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
`;

document.head.appendChild(menuStyles);

// Automatic copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Contact form validation
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Please complete all fields.";
    return;
  }

  formStatus.textContent =
    "Your details have been validated. Connect this form to a backend or form service to deliver your enquiry.";

  contactForm.reset();
});