/**
 * pages/Home
 * Home.tsx
**/

import { useEffect, useState } from "react";
import styled from "styled-components";
import HomeHeader from "./HomeHeader";
import HomeBody from "./HomeBody";
import Movie from "../../components/Movie";
import { MovieType } from "../../types/movie";

//< style
const HomeWrapper = styled.div`
  margin: 0 auto;
  padding-top: 7rem;
  max-width: 90vw;
`;

const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 7rem);
  font-size: 2rem;
  font-weight: 500;
`;
//> style

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<MovieType[]>([]);

  // 영화 API 불러오기
  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      );
      const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false);
    }

    getMovies();
  }, []);


  // 특정 장르 카테고리 설정
  const genreCategories = ['Action', 'Drama', 'History', 'Music', 'Animation'];

  // 장르별로 필터링
  const moviesByGenre = movies.reduce((acc, movie) => {
    const matchGenre = genreCategories.filter((genre) => movie.genres?.includes(genre));

    // genreCategories에 일치하는 장르가 있는 경우
    if (matchGenre.length > 0) {
      matchGenre.forEach((genre) => {
        if (!acc[genre]) acc[genre] = [];
        acc[genre].push(movie);
      });
    } else { // genreCategories에 일치하는 장르가 없으면 etc로
      if (!acc["Etc"]) acc["Etc"] = [];
      acc["Etc"].push(movie);
    }

    return acc;
  }, {} as Record<string, MovieType[]>);

  // etc를 마지막으로 위치
  const genreOrder = [...genreCategories, 'Etc'];

  return (
    <HomeWrapper>
      {loading ?
        <LoadingBox>Loading...</LoadingBox>
        : <>
          <HomeHeader total={movies.length} genreList={genreOrder} />
          <HomeBody moviesByGenre={moviesByGenre} genreOrder={genreOrder} />
        </>
      }
    </HomeWrapper>
  )
}

export default Home;