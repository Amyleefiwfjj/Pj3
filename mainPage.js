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
function mouseWheel(event) {
  scrollCount += Math.sign(event.delta);  // event.delta는 음수(위로 스크롤)와 양수(아래로 스크롤) 값을 가짐
  if (Math.abs(scrollCount) >= 5) {
    addNewElements();  // 새로운 요소 추가 함수 호출
    scrollCount = 0;   // 카운트 초기화
  }
  if (scrollCount>=0){
  for (let i = 0; i < images.length; i++) {
    deltaX[i] -= event.delta * 0.15 * (i + 1); 
  }
}
}
function addNewElements() {
  // 새 요소를 동적으로 추가 (HTML에 추가)
  const newDiv = createDiv();  // p5.js에서 HTML div 요소 생성
  newDiv.child(createP('새로운 텍스트 요소입니다!'));  // 새 텍스트 요소
  newDiv.child(createButton('새로운 버튼'));  // 새 버튼 요소

  // 버튼 클릭 시 알림창 표시
  newDiv.elt.querySelector('button').addEventListener('click', () => {
    alert('새로운 버튼 클릭!');
  });

  // 새로운 요소들을 캔버스 아래에 배치
  newDiv.position(0, height + 20);  // 캔버스 아래에 배치
}