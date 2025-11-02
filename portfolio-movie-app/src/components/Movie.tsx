/**
 * components
 * Movie.tsx
**/

import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieItem = styled.li`
  flex: 0 0 20rem;
  margin: 0 .5rem;
  width: 20rem;
  transform: scale(1);
  transition: transform .4s;

  figure {
    margin: 0;

    img {
      overflow: hidden;
      width: 100%;
      object-fit: cover;
      border-radius: 1.4rem;
    }
  }

  &:hover {
    z-index: 1;
    transform: scale(1.1);
  }
`;

interface Props {
  id: number;
  coverImg: string;
  title: string;
  summary: string;
  genres: string[];
}

function Movie({id, coverImg, title, summary, genres}: Props) {
  return (
    <MovieItem>
      <Link to={`/movie/${id}`}>
        <figure>
          <img src={coverImg} alt={title} />
          <figcaption>
            <p>{title}</p>
            {/* <p>{summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}</p> */}
            {/* <ul>
              {genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul> */}
          </figcaption>
        </figure>
      </Link>
    </MovieItem>
  )
}

export default Movie;