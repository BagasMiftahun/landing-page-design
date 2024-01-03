// main.js

// Button Up
document.addEventListener('DOMContentLoaded', function () {
    // ...  
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
    window.addEventListener('scroll', function () {
      var scrollHeight = window.scrollY;
  
      if (scrollHeight > 300) {
        scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        scrollToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        scrollToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
        scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
      }
    });
  
    scrollToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  