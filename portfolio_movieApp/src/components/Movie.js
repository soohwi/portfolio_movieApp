import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({id, coverImg, title, summary, genres}) {
  return (
    <li>
      <figure>
        <img src={coverImg} alt={title} />
        <figcaption>
          <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <p>{summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}</p>
          <ul>
            {genres.map((g) =>
              <li key={g}>{g}</li>
            )}
          </ul>
        </figcaption>
      </figure>
    </li>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
