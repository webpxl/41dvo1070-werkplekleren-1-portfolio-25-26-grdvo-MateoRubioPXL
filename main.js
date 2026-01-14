// Animate content panels on scroll
const cards = document.querySelectorAll('.content-panel');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target); 
      }
    });
  },
  { threshold: 0.5 } 
);

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(20px)';
  observer.observe(card);
});


document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
