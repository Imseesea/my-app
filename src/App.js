//화살표 함수를 사용한 컴포넌트
// const App = () => {
//   return <>안녕하세요.</>;
// };

// import A, { B, C } from "./Module";

// 일반 함수를 이용한 컴포넌트
// function App() {
function Header(props) {
  console.log(props); //const props = {title: "리액트(React)"}
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

function Nav(props) {
  //map() 함수를 사용한 배열 출력
  const list = props.nav.map((item, index) => (
    <li key={index}>
      <a href={"/sub/" + item.title}>{item.title}</a>
    </li>
  ));

  return (
    <nav>
      <ul>{list}</ul>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </article>
  );
}

function App() {
  const navArr = [{ title: "html" }, { title: "css" }, { title: "js" }];
  return (
    <div className="root">
      <Header title="리액트(react)" />
      <Nav nav={navArr} />
      <Article title="리액트란?" desc="desc1" />
      <Article title="컴포넌트란?" desc="desc2" />
      <Article title="props란?" desc="desc3" />
    </div>
  );
}

//App을 기본으로 내보내기
export default App;
