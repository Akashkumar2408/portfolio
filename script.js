// Testimonials data
const testimonials = [
  {
    name: 'Raj',
    title: '.NET Developer',
    company: '',
    rating: 5,
    quote: 'Rohit did a great job on the RD Gardi College website update. His work focused on improving the top navigation menu and updating various pages and views. The changes he made enhanced the overall user experience and gave the website a cleaner and more organized look. Rohit completed the work efficiently and understood the requirements clearly. I\'m satisfied with the results and appreciate his professionalism.',
    project: 'RD Gardi College Website'
  },
  {
    name: 'Nikhil',
    title: 'Owner',
    company: 'Harsiddhi Mobile',
    rating: 5,
    quote: 'Akashkumar delivered an excellent Android Kotlin billing and inventory management app for EasyBilling. The application has greatly streamlined our business operations with fast, efficient billing and accurate inventory tracking. The app is easy to use, stable, and well-designed, making day-to-day management much smoother. I appreciate Akashkumar\'s professionalism, clear communication, and ability to understand our business needs. Highly recommended for anyone looking for a reliable billing and inventory solution.',
    project: 'EasyBilling App'
  }
];

// Current testimonial index
let currentTestimonialIndex = 0;

// Navigation scroll functionality
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    // Close mobile menu if open
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.getElementById('menuToggle');
    if (navLinks && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      toggleMenuIcons(false);
    }
  }
}

// Navigation scroll effect
let isScrolled = false;
const navigation = document.getElementById('navigation');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50 && !isScrolled) {
    navigation.classList.add('scrolled');
    isScrolled = true;
  } else if (window.scrollY <= 50 && isScrolled) {
    navigation.classList.remove('scrolled');
    isScrolled = false;
  }
});

// Mobile menu toggle
let isMenuOpen = false;
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

function toggleMenuIcons(open) {
  if (open) {
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  } else {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
}

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    navLinks.classList.toggle('open', isMenuOpen);
    toggleMenuIcons(isMenuOpen);
  });
}

// Update testimonial display
function updateTestimonial() {
  const testimonial = testimonials[currentTestimonialIndex];
  const ratingEl = document.getElementById('testimonialRating');
  const quoteEl = document.getElementById('testimonialQuote');
  const nameEl = document.getElementById('authorName');
  const titleEl = document.getElementById('authorTitle');
  const projectEl = document.getElementById('authorProject');

  // Update rating stars
  if (ratingEl) {
    ratingEl.innerHTML = '';
    for (let i = 0; i < testimonial.rating; i++) {
      const star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      star.setAttribute('width', '24');
      star.setAttribute('height', '24');
      star.setAttribute('viewBox', '0 0 24 24');
      star.setAttribute('fill', '#fbbf24');
      star.setAttribute('class', 'star-icon');
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z');
      star.appendChild(path);
      ratingEl.appendChild(star);
    }
  }

  // Update quote
  if (quoteEl) {
    quoteEl.textContent = `"${testimonial.quote}"`;
  }

  // Update author info
  if (nameEl) {
    nameEl.textContent = testimonial.name;
  }

  if (titleEl) {
    titleEl.textContent = testimonial.title + (testimonial.company ? `, ${testimonial.company}` : '');
  }

  if (projectEl) {
    projectEl.textContent = testimonial.project;
  }

  // Update indicators
  updateIndicators();
}

// Update testimonial indicators
function updateIndicators() {
  const indicatorsEl = document.getElementById('testimonialIndicators');
  if (!indicatorsEl) return;

  indicatorsEl.innerHTML = '';
  testimonials.forEach((_, index) => {
    const indicator = document.createElement('button');
    indicator.className = `indicator ${index === currentTestimonialIndex ? 'active' : ''}`;
    indicator.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
    indicator.addEventListener('click', () => {
      currentTestimonialIndex = index;
      updateTestimonial();
    });
    indicatorsEl.appendChild(indicator);
  });
}

// Next testimonial
function nextTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  updateTestimonial();
}

// Previous testimonial
function prevTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
}

// Auto-swipe testimonials
let testimonialInterval;

function startTestimonialAutoSwipe() {
  testimonialInterval = setInterval(() => {
    nextTestimonial();
  }, 5000);
}

function stopTestimonialAutoSwipe() {
  if (testimonialInterval) {
    clearInterval(testimonialInterval);
  }
}

// Filter buttons for case studies
const filterButtons = document.querySelectorAll('.filter-btn');
const caseStudyCards = document.querySelectorAll('.case-study-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Filter case studies
    caseStudyCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});

// Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // Initialize testimonial
  updateTestimonial();
  startTestimonialAutoSwipe();

  // Pause auto-swipe on hover
  const testimonialCard = document.getElementById('testimonialCard');
  if (testimonialCard) {
    testimonialCard.addEventListener('mouseenter', stopTestimonialAutoSwipe);
    testimonialCard.addEventListener('mouseleave', startTestimonialAutoSwipe);
  }

  // Initialize case study cards with transition
  caseStudyCards.forEach(card => {
    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        scrollToSection(href.substring(1));
      }
    }
  });
});

