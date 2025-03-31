window.addEventListener('load', function () {
    // 로딩 화면 숨기기
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');

    // 로딩 화면을 숨기고 콘텐츠를 표시
    loadingScreen.style.display = 'none';
    content.style.display = 'block';
});
