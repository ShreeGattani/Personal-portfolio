// script.js
AOS.init();

gsap.from(".landing h1", { duration: 1, y: -50, opacity: 0, ease: "power3.out" });
gsap.from(".landing p", { duration: 1, y: 50, opacity: 0, delay: 0.5, ease: "power3.out" });

function animateCard(card) {
  gsap.fromTo(card, {scale: 0.9, rotationY: -10, opacity: 0.5}, {
    duration: 0.5,
    scale: 1,
    rotationY: 0,
    opacity: 1,
    ease: "power2.out"
  });
}

new Typed(".typed", {
  strings: ["Shree Gattani,", "a Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

document.querySelector('.theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Navigation active state handling
function setActiveNavLink(sectionId) {
  // Remove active class from all nav links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
  });
  
  // Add active class to the corresponding nav link
  const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// Handle navigation link clicks
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      // Smooth scroll to section
      targetSection.scrollIntoView({ behavior: 'smooth' });
      
      // Set active state
      setActiveNavLink(targetId);
      
      // Close mobile menu if open
      document.querySelector('.nav-links').classList.remove('active');
    }
  });
});

// Handle scroll to update active nav link
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100; // Offset for fixed navbar
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      setActiveNavLink(sectionId);
    }
  });
});

// Set initial active state
window.addEventListener('load', () => {
  setActiveNavLink('home');
});

function openModal(title, description, image, github, demo) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-description').textContent = description;
  document.getElementById('modal-image').src = image;
  document.getElementById('modal-github').href = github;
  document.getElementById('modal-demo').href = demo;
  document.getElementById('modal').classList.remove('hidden');
  gsap.from(".modal-content", {duration: 0.4, scale: 0.8, opacity: 0, ease: "back.out(1.7)"});
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}
