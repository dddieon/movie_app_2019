import React from "react"
import axios from "axios"
import Movie from "./Movie"
import "./App.css"

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [], // state인 movies
    }
    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
        console.log("데이터를 가져옴222" + movies)
        this.setState({ movies: movies, isLoading: false }) //state인 movies를 axios의 movies로 재정의
    }
    componentDidMount() {
        this.getMovies()
    }

    render() {
        const { isLoading, movies } = this.state
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        <h1>실험용 h1입니다</h1>
                        {movies.map((movie) => {
                            return (
                                //컴포넌트는 HTML을 반환한다
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}
                                ></Movie>
                            )
                        })}
                    </div>
                )}
            </section>
        )
    }
}

export default App
