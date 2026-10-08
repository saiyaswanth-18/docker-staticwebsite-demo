// HashTek Solutions - Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '&#10005;' : '&#9776;';
    });
  }

  // Highlight Current Active Page
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-link');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Contact Form Submission Handler (Mock Demo)
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerText;
      submitBtn.innerText = 'Submitting...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        contactForm.reset();

        if (formStatus) {
          formStatus.style.display = 'block';
          formStatus.innerHTML = `
            <div style="background: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
              <strong>Thank you for reaching out!</strong> Your inquiry has been received. Our team will contact you shortly.
            </div>
          `;
          setTimeout(() => {
            formStatus.style.display = 'none';
          }, 5000);
        }
      }, 900);
    });
  }
});
