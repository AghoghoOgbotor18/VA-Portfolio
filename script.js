// Reveal sections on scroll
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      obs.unobserve(entry.target); //reveal once
    }
  });
}, { threshold: 0.3 });
sections.forEach(section => observer.observe(section));



// Project modal
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
  <span class="close">&times;</span>
  <img class="modal-content" id="modal-img">
`;
document.body.appendChild(modal);

const modalImg = document.getElementById('modal-img');
const closeBtn = modal.querySelector('.close');
const projectButtons = document.querySelectorAll('.project-button');

// Open modal
projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    const imgSrc = button.getAttribute('data-img');
    modalImg.src = imgSrc;
    modal.classList.add('show');
  });
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

// Close when clicking outside
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});