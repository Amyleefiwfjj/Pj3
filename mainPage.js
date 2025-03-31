function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
}

// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger plugin from GSAP
    gsap.registerPlugin(ScrollTrigger);
  
    // Select all images (letter parts)
    const letterParts = document.querySelectorAll('.letter-part');
  
    // Loop through each image and animate it
    gsap.fromTo(letterParts, {
      opacity: 1,
      x: 0, // Start at original position
    }, {
      opacity: 1,
      x: (index) => (index * 100), // Move each part progressively more
      scrollTrigger: {
        trigger: '#name',  // The element that will trigger the animation
        start: 'top center',  // Start when the top of the element reaches the center of the viewport
        end: 'bottom center', // End when the bottom reaches the center
        scrub: true,  // Sync with the scroll position
      },
    });
  });
  
  