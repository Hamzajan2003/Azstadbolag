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

  // Booking form – opens mailto with pre-filled data
  var form = document.getElementById('booking-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var isOffer = e.submitter && e.submitter.getAttribute('name') === 'offer';
      var subject = isOffer ? 'Begär offert – A-Z Städbolaget' : 'Bokningsförfrågan – A-Z Städbolaget';
      var body = [
        'Namn: ' + (form.name.value || ''),
        'Telefon: ' + (form.phone.value || ''),
        'E-post: ' + (form.email.value || ''),
        'Adress: ' + (form.address.value || ''),
        'Tjänst: ' + (form.service.value || ''),
        'Storlek (kvm): ' + (form.size.value || ''),
        'Antal rum: ' + (form.rooms.value || ''),
        'Datum & tid: ' + (form.datetime.value || ''),
        'RUT-avdrag: ' + (form.rut.checked ? 'Ja' : 'Nej'),
        '',
        'Meddelande:',
        form.message.value || ''
      ].join('\n');
      var mailto = 'mailto:info@azstadbolag.se?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      window.location.href = mailto;
    });
  }
})();
