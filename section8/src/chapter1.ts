/**
 * 인덱스드 엑세스 타입
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const key = "author";

// function printAuthroInfo(author: Post["author"]) {
//   console.log(`${author.name}-${author.id}`);
// }

// const post: Post = {
//   title: "게시글 제목",
//   content: "게시글 본문",
//   author: {
//     id: 1,
//     name: "이정환",
//     age: 27,
//   },
// };

// printAuthroInfo(post.author);
function printAuthroInfo(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// [0]을 해도 된다.
// 배열의 요소 타입을 가져온다.
// []에 들어오는 것은 타입니다.
const post: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

printAuthroInfo(post.author);

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

// type Tup3 = Tup[3];

// 최적의 공통 타입을 추출한다.
type Tup4 = Tup[number];
