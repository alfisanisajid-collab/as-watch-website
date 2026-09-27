const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => navMenu.classList.toggle('open'));
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.product-card').forEach(card => {
      card.style.display = filter === 'all' || card.dataset.category === filter ? '' : 'none';
    });
  });
});

document.querySelector('.cta-btn').addEventListener('click', () => {
  document.querySelector('#catalog').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const originalText = button.textContent;
    button.textContent = 'Added ✓';
    button.disabled = true;
    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 1600);
  });
});

document.querySelector('.contact-form').addEventListener('submit', event => {
  event.preventDefault();
  alert('Thank you for contacting AS Watch. We will be in touch soon.');
  event.target.reset();
});
