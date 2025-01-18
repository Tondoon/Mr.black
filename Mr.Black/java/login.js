//로그인
function login() {
    // 아이디와 비밀번호를 가져옵니다.
    const username = document.querySelector('input[name="i"]').value;
    const password = document.querySelector('input[name="c"]').value;

    // 아이디와 비밀번호가 올바른지 확인합니다.
    if (username === 'Tondoon' && password === 'ilikeyuchan2') {
        // 로그인 성공 시 index.html로 리다이렉트합니다.
        window.location.href = 'index2.html';
    }
}

  