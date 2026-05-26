// Smooth nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.style.opacity = link.getAttribute('href') === '#' + entry.target.id ? '1' : '0.7';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((s) => observer.observe(s));

// Contact form – demo submission handler
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'sending...';
  btn.disabled = true;
  setTimeout(() => {
    e.target.reset();
    btn.textContent = 'send message';
    btn.disabled = false;
    const note = document.getElementById('form-note');
    note.hidden = false;
    setTimeout(() => { note.hidden = true; }, 5000);
  }, 1200);
}

// Fade-in on scroll
const fadeEls = document.querySelectorAll('.card, .step, .about-text, .contact-form');
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((el) => {
      if (el.isIntersecting) {
        el.target.classList.add('visible');
        fadeObserver.unobserve(el.target);
      }
    });
  },
  { threshold: 0.12 }
);

fadeEls.forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  fadeObserver.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.visible').forEach((el) => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
});

// Add .visible styles via JS
const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: none !important; }';
document.head.appendChild(style);
