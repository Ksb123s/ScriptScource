/* 
 orange
 li 클릭시 orage 클래스명 움직이기

 세 개의 li 찾기
*/
// 교수님 방식
const firstli = document.querySelector(".list li:first-child");
const secondli = document.querySelector(".list li:nth-child(2)");
const thirdli = document.querySelector(".list li:last-child");

const content1 = document.querySelector(".container div:nth-child(2)");
const content2 = document.querySelector(".container div:nth-child(3)");
const content3 = document.querySelector(".container div:last-child");

firstli.addEventListener("click", () => {
  // 다른 li 에 orange 클래스명 제거
  secondli.classList.remove("orange");
  thirdli.classList.remove("orange");

  // firstli orange 클래스명 추가
  firstli.classList.add("orange");

  content1.classList.add("show");
  content2.classList.remove("show");
  content3.classList.remove("show");
});
secondli.addEventListener("click", () => {
  // 다른 li 에 orange 클래스명 제거
  // secondli orange 클래스명 추가
  secondli.classList.add("orange");
  thirdli.classList.remove("orange");
  firstli.classList.remove("orange");

  content1.classList.remove("show");
  content2.classList.add("show");
  content3.classList.remove("show");
});
thirdli.addEventListener("click", () => {
  // 다른 li 에 orange 클래스명 제거
  // thirdli orange 클래스명 추가
  secondli.classList.remove("orange");
  thirdli.classList.add("orange");
  firstli.classList.remove("orange");

  content1.classList.remove("show");
  content2.classList.remove("show");
  content3.classList.add("show");
});
