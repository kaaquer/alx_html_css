document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navLinksList = document.querySelectorAll('.nav-links a');
  const menuOverlay = document.querySelector('.menu-overlay');

  function toggleMenu(e) {
    e.stopPropagation();
    const isOpen = navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
    menuOverlay.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isOpen);
  }

  function closeMenu() {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('open');
    menuOverlay.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  menuToggle.addEventListener('click', toggleMenu);

  // Close menu when clicking a link (for SPA feel)
  navLinksList.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu when clicking the overlay
  menuOverlay.addEventListener('click', closeMenu);

  // Optional: Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (window.innerWidth <= 480 && navLinks.classList.contains('active')) {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target) && !menuOverlay.contains(e.target)) {
        closeMenu();
      }
    }
  });

  // Optional: Close menu on resize if > 480px
  window.addEventListener('resize', function () {
    if (window.innerWidth > 480) {
      closeMenu();
    }
  });
}); 