import React from "react"
import PropTypes from "prop-types"
import "./Movie.css"

//state를 필요로 하지 않기 대문에, class component가 될 필요가 없다
function Movie({ year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                ))}
            </ul>
            <p className="movie__summary">{summary}</p>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie
