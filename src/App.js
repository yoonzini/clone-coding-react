import { PropTypes } from 'prop-types';
import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

// App클래스는  React.component 클래스를 상속받는다.
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [], //미리 데이터를 정의하기
  };

  getMovies = async () => {
    // api에서 데이터를 받아오는 axios.get()을 실행하려면 시간이 필요하고,
    // 그 사실을 자바스크립트에게 알려야만 데이터를 잡ㅂ을 수 있으므로
    // async, await 를 사용하였다.
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
    );
    console.log(movies);
    this.setState({ movies, isLoading: false }); //키와 대입할 변수의 이름이 같으면 축약가능
  };

  componentDidMount() {
    // 영화 데이터 로딩!
    this.getMovies();
  }

  render() {
    //구조 분해 할당으로 this.state에 있는 isLoading을 우선 얻으면
    // 항상 this.state를 입력하지 않아도 된다.
    const { isLoading, movies } = this.state;
    console.log('rendering');
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">'Loading...'</span>
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
    );
  }
}

export default App;
