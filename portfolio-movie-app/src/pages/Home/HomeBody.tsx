/**
 * pages/Home
 * HomeBody.tsx
**/

import styled from "styled-components";
import Movie from "../../components/Movie";
import { MovieType } from "../../types/movie";

//< style
const MovieSection = styled.section`
  padding: 2rem 0;
  scroll-margin-top: 7rem;

  h3 {
    margin: 0;
    font-size: 2rem;
  }
`;

const MovieList = styled.div`
  overflow-x: auto;
  padding: 2rem;

  ul {
    display: flex;
  }
`;
//> style

interface Props {
  moviesByGenre: Record<string, MovieType[]>
  genreOrder: string[]
}

function HomeBody({moviesByGenre, genreOrder}: Props) {
  return (
    <>
      {genreOrder.map((genre) => (
        moviesByGenre[genre] ? (
          <MovieSection key={genre} id={genre}>
            <h3>{genre}</h3>
            <MovieList>
              <ul>
                {moviesByGenre[genre].map((movie) => (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                  />
                ))}
              </ul>
            </MovieList>
          </MovieSection>
        ) : null
      ))}
    </>
  )
}

export default HomeBody;