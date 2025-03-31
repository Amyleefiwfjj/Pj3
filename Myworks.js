let points = [];
let lines = [];
let plane = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Create a set of points
  for (let i = 0; i < 100; i++) {
    points.push(createVector(random(width), random(height)));
  }
}

function draw() {
  background(255);
  
  let scrollAmount = map(scrollY, 0, height, 0, 1);
  
  // Animate points based on scroll
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    p.x += sin(scrollAmount * TWO_PI + i) * 2;
    p.y += cos(scrollAmount * TWO_PI + i) * 2;
    ellipse(p.x, p.y, 5, 5);
  }
  
  // Draw lines when the scroll reaches a threshold
  if (scrollAmount > 0.5) {
    for (let i = 0; i < points.length - 1; i++) {
      for (let j = i + 1; j < points.length; j++) {
        let d = dist(points[i].x, points[i].y, points[j].x, points[j].y);
        if (d < 100) {
          lines.push([points[i], points[j]]);
          line(points[i].x, points[i].y, points[j].x, points[j].y);
        }
      }
    }
  }
  
  // Create a plane when scroll reaches another threshold
  if (scrollAmount > 0.8) {
    for (let i = 0; i < lines.length - 1; i++) {
      for (let j = i + 1; j < lines.length; j++) {
        let p1 = lines[i][0];
        let p2 = lines[i][1];
        let p3 = lines[j][0];
        plane.push([p1, p2, p3]);
        triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
      }
    }
  }
}

// Scroll-based logic
function scrollY() {
  return window.scrollY;
}
window.addEventListener('load', function() {
    // 로딩 화면 숨기기
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');
  
    // 로딩 화면을 숨기고 콘텐츠를 표시
    loadingScreen.style.display = 'none';
    content.style.display = 'block';
  });