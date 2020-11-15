import React from "react";
import axios from "axios";
import Movie from "../component/Movie";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    console.log("getMovies");
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false }); // setState로 render 함수를 다시 호출.
    console.log("done-getMovies");
  }; // async-await로 axios.get으로 URL의 정보를 얻어올 때까지 기다리는 비동기처리를 한다
  componentDidMount() {
    console.log("componentDidMount");
    this.getMovies();
    console.log("done-componentDidMount");
  } // render() 함수 호출 후 호출되는 componentDidMount() 함수. 동기처리로 getMovies 호출 후 바로 종료
  render() {
    console.log("im render"); // console.log 출력
    const { isLoading, movies } = this.state; // state의 정보를 할당
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    ); // Movie.js에서 받아오는 Movie 컴포넌트를 그려준다.
  } // log output -> state 할당 -> isLoading에서 Loading 보여줌 -> componentDidMount-getMovies 호출 -> API 호출 후, state false로 변경
  // render 함수 호출 -> state 재할당 -> 화면에 가져온 API 정보를 뿌려준다 -> getMovies 함수로 돌아가서 movies log 출력
}
// state에 바꾸고 싶은 데이터를 넣는다. state는 this.state로 사용.
// state는 Home class 내부 메소드 안에서 직접 변경이 불가능하다.
// state는 render function을 통해서만 변경?
// Life cycle method : constructor -> componentWillMount -> render -> componentDidMount
// setState시 : render -> componentDidUpdate
// componentWillUnmount : component가 사라진 후 실행되는 메소드

// component update를 하는 경우
// 1. props가 바뀔 때
// 2. state가 바뀔 때
// 3. 부모 컴포넌트가 리렌더링 될 때,
// 4. this.forceUpdate를 통해 강제 렌더링 트리거 시에

export default Home;
