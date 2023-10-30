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
      <Nav />
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">html</a>
        </li>
        <li>
          <a href="/">css</a>
        </li>
        <li>
          <a href="/">js</a>
        </li>
      </ul>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h2>타이틀1</h2>
      <p>Hello, React</p>
    </article>
  );
}

function App() {
  return (
    <div className="root">
      <Header title="리액트(react)" />
      <Nav />
      <Article />
      <Article />
      <Article />
    </div>
  );
}

//App을 기본으로 내보내기
export default App;
