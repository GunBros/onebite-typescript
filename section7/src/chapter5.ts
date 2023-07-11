/**
 * 프로미스
 */

// resolve나 reject는 결과값의 타입을 추론하지 않는다.
// 타입을 지정해주지 않으면 unknown으로 추론된다.
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("~~~~ 때문에 실패");
  }, 3000);
});

promise
  .then((response) => {
    console.log(response * 10);
  })
  // 실패했을 때의 타입은 정할 수 없기때문에 타입좁히기가 필요하다.
  .catch((err) => {
    if (typeof err === "string") {
      console.log(err);
    }
  });

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
