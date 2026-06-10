// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobileMenu');

if (toggle && mobileMenu) {
  toggle.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Contact form — Web3Forms
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');

if (form) {
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    statusEl.style.display = 'none';

    const data = new FormData(form);
    const object = Object.fromEntries(data);
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: json
      });
      const result = await response.json();

      if (result.success) {
        statusEl.textContent = 'Thank you! Your message has been sent.';
        statusEl.className = 'form-status form-success';
        statusEl.style.display = 'block';
        form.reset();
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      statusEl.textContent = 'Something went wrong. Please email us directly at info@brokenbayouhoa.com';
      statusEl.className = 'form-status form-error';
      statusEl.style.display = 'block';
    }

    submitBtn.disabled = false;
    submitBtn.textContent = 'Connect With Us';
  });
}
