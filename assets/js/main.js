// Show menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Menu show
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu'); // Menggunakan toggle agar bisa menutup menu dengan klik tombol toggle lagi
  });
}

// Menu hidden
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Remove menu mobile
const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
};

navLinks.forEach((navLink) => navLink.addEventListener('click', linkAction));

// Add blur to header
const blurHeader = () => {
  const header = document.getElementById('header');
  // Add a class if the scrollY is greater than 50 pixels
  window.scrollY >= 50 ? header.classList.add('blur-header') 
                  : header.classList.remove('blur-header')
};

window.addEventListener('scroll', blurHeader);

// SHOW SCROLL UP

const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  //when the scroll is higher than 350 viweport height, add the
  window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionClass = document.querySelector('.nav__menu a[href*="#' + sectionId + '"]');

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-link');
    } else {
      sectionClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);

// SCROLL ANIMATION
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2500,
  delay: 300,
  reset: true, // Animation repeat
});

sr.reveal('.home__img, .news__data, .care__img, .contact__content, .footer');
sr.reveal('.home__data, .care__list, .contact__img', { delay: 500 });
sr.reveal('.new__card', { delay: 500, interval: 100 });
sr.reveal('.shop__card', { interval: 100 });
