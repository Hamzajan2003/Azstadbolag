/**
 * A-Z Städbolaget – Site scripts
 * Smooth scroll and any future interactivity (e.g. mobile menu) go here.
 */

(function () {
  'use strict';

  // Optional: highlight current section in nav on scroll
  var header = document.querySelector('header');
  var navLinks = document.querySelectorAll('nav a[href^="#"]');

  function onScroll() {
    if (window.scrollY > 80) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  if (header) {
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Ensure anchor links don’t add to history if you prefer (optional)
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        target.setAttribute('tabindex', '-1');
      }
    });
  });
})();
