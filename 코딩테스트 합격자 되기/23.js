function solution(genres, plays) {
  //0. 모든 data를 갖고 있는 obj 생성
  const arr = [];
  genres.forEach((genre, idx) => {
    arr.push({ genre, idx, play: plays[idx] });
  });

  //1. 장르별 횟수 합 계산
  const map = new Map();

  plays.forEach((play, idx) => {
    const genre = genres[idx];
    map.set(genre, (map.get(genre) || 0) + play);
  });

  //2. 장르별 합이 큰 순서대로 순환하며 그 안에서 최대 두 가지 추출 하여 답 도출
  const sortedMap = [...map].sort((a, b) => b[1] - a[1]);
  const answer = [];

  sortedMap.forEach((s) => {
    const genre = s[0];
    const arrForGenre = arr.filter((el) => el.genre === genre);

    arrForGenre.sort((a, b) => {
      if (a.play === b.play) return a.idx - b.idx;
      return b.play - a.play;
    });

    if (arrForGenre.length <= 2) answer.push(arrForGenre);
    else answer.push(arrForGenre.slice(0, 2));
  });

  return answer.flat().map((el) => el.idx);
}

function solution_book(genres, plays) {
  let answer = [];
  const genresObj = {};
  const playObj = {};

  //1. 장르별 총 재생 횟수와 각 곡의 재생 횟수 저장
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    if (!(genre in genresObj)) {
      genresObj[genre] = [];
      playObj[genre] = 0;
    }

    genresObj[genre].push([i, play]);
    playObj[genre] += play;
  }

  //2. 총 재생 횟수가 많은 장르 순으로 정렬
  const sortedGenres = Object.keys(playObj).sort((a, b) => {
    return playObj[b] - playObj[a];
  });

  //3. 각 장르 내에서 노래를 재생 횟수 순으로 정렬해 최대 2곡까지 선택
  for (const genre of sortedGenres) {
    const sortedSongs = genresObj[genre].sort((a, b) => {
      return a[1] === b[1] ? a[0] - b[0] : b[1] - a[1];
    });

    answer.push(...sortedSongs.slice(0, 2).map((song) => song[0]));
  }

  return answer;
}
