        // heading변수를 선언하고 h1태그를 저장한 상태가 되었다
        var heading = document.querySelector("#heading");
        // h1태그를 클릭을 하면 글자색깔을 red로 설정하세요.
        heading.onclick = function() {
            heading.style.color = "red";
        }