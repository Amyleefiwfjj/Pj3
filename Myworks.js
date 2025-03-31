function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255); randomSeed(0);

  let x, y, r;
  let delta = 50;
  let n1 = int(random(0, 255));
  let n2 = int(random(0, 255));
  let n3 = int(random(0, 255));
  let n4 = int(random(0, 255));

  let backSlashProb = map(mouseX, 0, windowWidth, 0, 1);
  let backSlashThickness = map(mouseY, 0, windowHeight, 3, 30);

  for (y = 0; y < windowHeight; y += delta) {
    for (x = 0; x < windowWidth; x += delta) {
      r = random(0, 1);
      if (r < backSlashProb) {
        stroke(n1, n2, n3, n4); strokeWeight(backSlashThickness); line(x, y, x + delta, y + delta);
      } else {
        stroke(255 - n1, 255 - n2, 255 - 3); strokeWeight(1);
        line(x + delta, y, x, y + delta);
      }
    }
  }
}

function onmouseenter() {

}

window.addEventListener('load', function () {
  // 로딩 화면 숨기기
  const loadingScreen = document.getElementById('loading-screen');
  const content = document.getElementById('content');

  // 로딩 화면을 숨기고 콘텐츠를 표시
  loadingScreen.style.display = 'none';
  content.style.display = 'block';
});
