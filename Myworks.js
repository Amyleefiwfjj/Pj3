let circleRadius = 20; // 원의 기본 반지름
let circleX = 0; // 원의 x 좌표
let circleY = 0; // 원의 y 좌표

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Scroll-triggered animations for dynamic line generation
  gsap.from(".scroll-section", {
    scrollTrigger: {
      trigger: ".scroll-section",
      start: "top center",
      end: "bottom center",
      scrub: true, // 스크롤에 맞춰 부드럽게 애니메이션
    },
    opacity: 0,
    y: 100,
  });
}

function draw() {
  background(255);
  randomSeed(0);

  let x, y, r;
  let delta = 50;
  let easing = 0.1; // 부드럽게 따라가는 속도 (0.1은 천천히 따라감)
  circleX += (mouseX - circleX) * easing; // 원의 x 위치 부드럽게 이동
  circleY += (mouseY - circleY) * easing; // 원의 y 위치 부드럽게 이동
  // 원 그리기
  stroke(0);
  strokeWeight(3);
  ellipse(circleX, circleY, circleRadius * 2, circleRadius * 2); // 원의 크기 설정
  circleRadius = map(dist(mouseX, mouseY, circleX, circleY), 0, width, 20, 100); // 크기 조정
  // Map mouse position to control the effect
  let backSlashProb = map(mouseX, 0, windowWidth, 0, 1);
  let backSlashThickness = map(mouseY, 0, windowHeight, 5, 40);

  for (y = 0; y < windowHeight; y += delta) {
    for (x = 0; x < windowWidth; x += delta) {
      r = random(0, 1);

      // Adding a random variation to the line curvature
      let curvature = random(0.2, 0.8);
      let offsetX = random(-5, 5);
      let offsetY = random(-5, 5);
      let alpha = map(dist(x, y, mouseX, mouseY), 0, width, 100, 255); // Change alpha based on mouse distance

      if (r < backSlashProb) {
        // Use a gradient from purple to pink for the backslash lines
        strokeWeight(backSlashThickness);
        stroke(lerpColor(color(255, 0, 255, alpha), color(255, 105, 180, alpha), random(1)));
        // Curve the line slightly to make it more dynamic
        bezier(x + offsetX, y + offsetY, x + delta / 2 + curvature, y + delta / 2 + curvature, x + delta + offsetX, y + delta + offsetY);
      } else {
        // Use black lines with varying opacity for the other lines
        stroke(lerpColor(color(0, 0, 0, alpha), color(50, 50, 50, alpha), random(1)));
        strokeWeight(1);
        // Curve the line slightly to make it more dynamic
        bezier(x + delta + offsetX, y + offsetY, x + delta / 2 - curvature, y + delta / 2 - curvature, x + offsetX, y + delta + offsetY);
      }
    }
  }
}
function mouseClicked() {
  window.location.href = "Myworks2.html"; // 클릭 즉시 Myworks2.html로 이동
}

window.addEventListener('load', function () {
  // 로딩 화면 숨기기
  const loadingScreen = document.getElementById('loading-screen');
  const content = document.getElementById('content');

  // 로딩 화면을 숨기고 콘텐츠를 표시
  loadingScreen.style.display = 'none';
  content.style.display = 'block';
}); 