document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  const statusEl = document.getElementById('formStatus');
  const contactForm = document.getElementById('contactForm');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      statusEl.textContent = 'Thanks! Your message is sent (placeholder).';
      contactForm.reset();
      setTimeout(() => {
        statusEl.textContent = '';
      }, 3500);
    });
  }
});
