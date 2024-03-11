/* 
 orange
 li 클릭시 orage 클래스명 움직이기

 세 개의 li 찾기
*/

// 내방식;
const btns = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");
btns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.remove("orange");
    }
    btn.classList.add("orange");
    for (let i = 0; i < btns.length; i++) {
      contents[i].classList.remove("show");
    }
    contents[idx].classList.add("show");
  });
});
// 교수님 방식 queryselectAll
btns.forEach((li, idx) => {
  li.addEventListener("click", (e) => {
    // 다른 li에 orange 클래스명 제거
    btns.forEach((item) => {
      item.classList.remove("orange");
    });
    // 현재 이벤트가 일어난 li orange 클래스면 추가
    e.target.classList.add("orange");
    // 다른 div의 show 제거
    contents.forEach((item) => {
      item.classList.remove("show");
    });
    // 현재 이벤트가 일어난 li 와 순서가 일치하는 div show 추가
    contents[idx].classList.add("show");
  });
});
