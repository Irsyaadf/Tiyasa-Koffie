const toggleBtn = document.getElementById('showAllBtn');
const hiddenCards = document.querySelectorAll('.card.hidden');

const floatingBtn = document.getElementById("floatingBtn");
const floatingIcons = document.getElementById("floatingIcons");
const closeIcons = document.getElementById("closeIcons");

toggleBtn.addEventListener('click', () => {
    hiddenCards.forEach(card => card.classList.toggle('hidden'));

    if (toggleBtn.textContent === 'Show All') {
        toggleBtn.textContent = 'Hide';
    } else {
        toggleBtn.textContent = 'Show All';
    }
});

floatingBtn.addEventListener("click", () => {
  floatingIcons.classList.add("show");
  floatingBtn.classList.add("hidden");
});

closeIcons.addEventListener("click", () => {
  floatingIcons.classList.remove("show");
  floatingBtn.classList.remove("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const closeMenu = document.getElementById("close-menu");

  menuToggle.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
  });

  closeMenu.addEventListener("click", function () {
    hamburgerMenu.classList.remove("active");
  });
});
