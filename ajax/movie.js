const Year = document.getElementById("txtYear");
const Mon = document.getElementById("selMon");
const Day = document.getElementById("selDay");

const init = () => {
  //  오늘 날짜 구하기
  const today = new Date();
  let year = today.getFullYear();
  let day = today.getDate() - 1;
  let month = today.getMonth() + 1;
  Year.value = year;
  //   if (month < 10) {
  //     month = "0" + month;
  //   }
  //   if (day < 10) {
  //     day = "0" + day;
  //   }
  //   Mon.value = month;
  //   Day.value = day;
  Mon.value = month < 10 ? "0" + month : month;
  Day.value = day < 10 ? "0" + day : day;
};
const MoveList = (url) => {
  fetch(url)
    .then((respone) => {
      if (!respone.ok) throw new Error();
      return respone.json();
    })
    .then((data) => {
      console.log(data);
      let boxofficeList = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(boxofficeList);
      let result = ``;
      let text = "";
      boxofficeList.forEach((items) => {
        if (items.rankInten > 0) {
          text = "▲" + items.rankInten;
        } else if (items.rankInten < 0) {
          text = "▼" + items.rankInten;
        } else {
          text = items.rankInten;
        }
        result += ` ${items.rank} 위(${text}) : <a href="#" onclick='javascript:Show(${items.movieCd})'>${items.movieNm}</a></br>`;
      });
      document.getElementById("msg").innerHTML = result;
    })
    .catch();
};

function Show(movieCD) {
  console.log(movieCD);
  url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${movieCD}`;

  //   영화 제목(한/영 key movieNm/movieNmEn), 상영시간(showTm), 감독(directors), 배우(actors)
  fetch(url)
    .then((respone) => {
      if (!respone.ok) throw new Error();
      return respone.json();
    })
    .then((data) => {
      let movieInfo = data.movieInfoResult.movieInfo;
      let result = `<ul>`;
      result += `<li>영화제목 : ${movieInfo.movieNm} </li>`;
      result += `<li>영어제목 : ${movieInfo.movieNmEn} </li>`;
      result += `<li>상영시간 : ${movieInfo.showTm} </li>`;
      result += `<li>감독 :`;
      //   자동 콤마 추가 시스템
      let director = [];
      movieInfo.directors.forEach((dir) => {
        director.push(dir.peopleNm);
      });
      if (director.length >= 2) {
        result += `${director.join(",")}`;
      } else {
        result += ` ${director[0]}`;
      }
      result += `</li>`;
      result += `<li>출연배우 :`;
      let actor = [];
      movieInfo.actors.forEach((act) => {
        actor.push(act.peopleNm);
      });
      if (actor.length >= 2) {
        result += `${actor.join(",")}`;
      } else {
        result += ` ${director[0]}`;
      }
      result += ` </li></ul>`;
      //   문서추가
      document.querySelector(".box2").innerHTML = result;
    })
    .catch();
}
init();

document.querySelector("button").addEventListener("click", () => {
  // 영화진흥위원회의 특정 날짜의 박스 오피스 가져오기
  let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${
    Year.value + Mon.value + Day.value
  }`;
  MoveList(url);
});
