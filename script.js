// Smooth scroll for "Scroll Down" button
document.querySelectorAll('.scroll-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});



      AOS.init();
      
      // Toggle fullscreen menu
      function toggleMenu() {
          const menu = document.getElementById('fullscreenMenu');
          menu.classList.toggle('open');
      }



    let currentIndex = 0;

    function moveSlide(direction) {
      const items = document.querySelectorAll(".carousel-item");
      const totalItems = items.length;
    
      // Hide the current slide
      items[currentIndex].classList.remove("active");
    
      // Calculate the new index based on the direction
      let newIndex = currentIndex + direction;
    
      // Prevent navigation beyond the first or last slide
      if (newIndex < 0) {
        newIndex = 0; // Stop at the first slide
      } else if (newIndex >= totalItems) {
        newIndex = totalItems - 1; // Stop at the last slide
      }
    
      // Update the current index
      currentIndex = newIndex;
    
      // Show the new slide
      items[currentIndex].classList.add("active");
    }
    
    // Add event listeners for buttons
    document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
    document.querySelector(".next").addEventListener("click", () => moveSlide(1));

    
    