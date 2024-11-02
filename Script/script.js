document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-button');   
  
    const nextButton = document.querySelector('.next-button');
    let currentSlide   
   = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide   
   = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);   
  
    }
  
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
  
    showSlide(currentSlide);   
  
  });