/**
 * routes
 * Detail.tsx
**/

import { useEffect,  useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import { MovieType } from "../types/movie";
import styled from "styled-components";


const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 3rem;
  font-weight: 500;
`;

function Detail() {
  const { id } = useParams<{id: string}>();
  const [loading, setLoading] = useState(false);
  const [movieInfo, setMovieInfo] = useState<MovieType | null>(null);

  // 영화 상세정보 API 불러오기
  useEffect(() => {
    const getMovieInfo = async () => {
      const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
      const json = await response.json();
      setMovieInfo(json.data.movie);
      setLoading(false);
    }

    getMovieInfo();
  }, [id]);


  return (
    <>
      {loading || !movieInfo ? (
        <LoadingBox>Loading...</LoadingBox>
      ) : (
        <MovieDetail
          title={movieInfo.title}
          year={movieInfo.year}
          description={movieInfo.description_full || ""}
          coverImg={movieInfo.large_cover_image}
          genres={movieInfo.genres}
          rating={movieInfo.rating}
        />
      )}
    </>
  )
}

export default Detail;