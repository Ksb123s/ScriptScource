//required
// input value 가 들어 있는지 체크
// value 가 어떤 측정 조건을 만족하는지 확인
const form = document.querySelector("form");
const id = document.querySelector("#userid");
const psw = document.querySelector("#password");
const pswC = document.querySelector("#confirm-password");
const index = [id, psw, pswC];

const regId = /(?=^[A-z])(?=.+\d)[A-z\d]{6,12}$/;
const regPwd = /(?=^[A-z])(?=.+\d)(?=.+[!@$%])[A-z\d!@$%]{8,15}$/;

// true 자료 : 0 제외 숫자, '문자', [], {}
// false 자료 : 0, '', null, undefined, NaN

// if(id.value == '')
// if(id.value.length ==0)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   index.forEach((element) => {
  //     if (!element.value) {
  //       element.nextElementSibling.classList.add("show");
  //     } else {
  //       element.nextElementSibling.classList.remove("show");
  //     }
  //   });
  if (!id.value || regId.test(id.value) == false) {
    id.nextElementSibling.classList.add("show");
  } else {
    id.nextElementSibling.classList.remove("show");
  }
  if (!psw.value || regPwd.test(psw.value) == false) {
    psw.nextElementSibling.classList.add("show");
  } else {
    psw.nextElementSibling.classList.remove("show");
  }
  if (!pswC.value) {
    pswC.nextElementSibling.classList.add("show");
  } else if (pswC.value != psw.value) {
    pswC.nextElementSibling.textContent = "이전 비밀번호와 다름니다.";
    pswC.nextElementSibling.classList.add("show");
  } else {
    pswC.nextElementSibling.classList.remove("show");
  }
});
