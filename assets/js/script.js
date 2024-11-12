const toggleBtn = document.getElementById('showAllBtn');
const hiddenCards = document.querySelectorAll('.card.hidden');

toggleBtn.addEventListener('click', () => {
    hiddenCards.forEach(card => card.classList.toggle('hidden'));

    // Toggle button text between "Show All" and "Sembunyikan"
    if (toggleBtn.textContent === 'Show All') {
        toggleBtn.textContent = 'Hide';
    } else {
        toggleBtn.textContent = 'Show All';
    }
});
