const data = {
    "정동원": {
        images: ["/vid,img/정동원/정동원.jpg"]
        videos: ["/vid,img/#.mp4"]
    },
    "악뮤": {
        images: ["/vid,img/악뮤(AKMU)/악뮤.jpg"]
        videos: ["/vid,img/#.mp4"]
    },
    // 다른 데이터...
};
// 원하는 키워드와 관련된 이미지 및 비디오 파일명을 추가하세요
document.getElementById('search-button').addEventListener('click', function () {
    const query = document.getElementById('search-input').value;
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = ''; // 이전 결과 초기화

    // "영상" 검색어 처리
    if (query === "영상") {
        window.location.href = 'video.html'; // video.html로 이동
        return;
    }
    // "검색어" 검색어 처리
    if (query === "검색어") {
        window.location.href = 'searching.html'; // searching.txt로 이동
        return;
    }
    if (data[query]) {
        // 이미지 결과 표시
        data[query].images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image; // 이미지 경로를 설정
            imgElement.style.width = '100px'; // 이미지 크기 조정
            const div = document.createElement('div');
            div.className = 'result-item';
            div.appendChild(imgElement);
            resultsContainer.appendChild(div);
        });

        // 비디오 결과 표시
        data[query].videos.forEach(video => {
            const videoElement = document.createElement('video');
            videoElement.src = video; // 비디오 경로를 설정
            videoElement.controls = true; // 비디오 컨트롤 추가
            const div = document.createElement('div');
            div.className = 'result-item';
            div.appendChild(videoElement);
            resultsContainer.appendChild(div);
        });
    } else {
        resultsContainer.innerHTML = '결과가 없습니다.';
    }
});

// 오른쪽 클릭 방지 및 경고 메시지
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("영상/사진 및 사이트 내용 복재는 저작권 법에 의해 처벌 될 수 있습니다.");
});

// 터치 이벤트를 위한 변수
let touchTimer;

// 터치 시작 이벤트
document.addEventListener('touchstart', function (e) {
    touchTimer = setTimeout(function () {
        alert("영상/사진 및 사이트 내용 복재는 저작권 법에 의해 처벌 될 수 있습니다.");
    }, 2000);
});

// 터치 종료 이벤트
document.addEventListener('touchend', function (e) {
    clearTimeout(touchTimer);
});

// 터치 취소 이벤트
document.addEventListener('touchcancel', function (e) {
    clearTimeout(touchTimer);
});

