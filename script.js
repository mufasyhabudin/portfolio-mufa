
// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Tutup menu setelah navigasi diklik
const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


// =========================
// DYNAMIC COPYRIGHT YEAR
// =========================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
