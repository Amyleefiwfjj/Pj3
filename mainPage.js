let images = [];
let x = 400;
let y = 150; 
let deltaX = new Array(12).fill(0); 
let scrollCount = 0;

function preload() {
  for (let i = 0; i < 12; i++) {
    images[i] = loadImage(`/asset/${i + 1}.png`);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(225, 225, 225); 

  for (let i = 0; i < images.length; i++) {
    let currentX = x + deltaX[i]; 
    image(images[i], currentX, y + i *60,2700,60); 
  }
}
window.addEventListener('load', function() {
  // 로딩 화면 숨기기
  const loadingScreen = document.getElementById('loading-screen');
  const content = document.getElementById('content');

  // 로딩 화면을 숨기고 콘텐츠를 표시
  loadingScreen.style.display = 'none';
  content.style.display = 'block';
});

function addNewElements() {
  console.log("Adding new elements...");
  // Add your code for adding elements here
}

function mouseWheel(event) {
  scrollCount += Math.sign(event.delta);  // event.delta is negative for scrolling up and positive for scrolling down

  if (Math.abs(scrollCount) >= 5) {
    // Ensure that addNewElements function is defined
    if (typeof addNewElements === 'function') {
      addNewElements();  // Call the function to add new elements
    } else {
      console.error("addNewElements function is not defined!");
    }
    
    scrollCount = 0;   // Reset the scroll count
  }

  if (scrollCount >= 0) {
    for (let i = 0; i < images.length; i++) {
      deltaX[i] -= event.delta * 0.15 * (i + 1); 
    }
  }

  // Navigation logic
  if (Math.abs(scrollCount) >= 5) {
    setTimeout(() => {
      window.location.href = "Myworks.html";  // Navigate to Myworks.html after a delay
    }, 500);  // 500 ms delay
  }
}