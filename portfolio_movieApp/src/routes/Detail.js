import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState();

  // 영화 상세정보 API 불러오기
  const getMovieInfo = async () => {
    const json  = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovieInfo(json.data.movie);
    setLoading(false);
  }

  console.log(movieInfo);

  useEffect(() => {
    getMovieInfo();
  }, []);

  return (
    <>
      {loading ?
        <h2>Loading...</h2> :
        <MovieDetail
          key={movieInfo.id}
          title={movieInfo.title}
          year={movieInfo.year}
          description={movieInfo.description_full}
          coverImg={movieInfo.large_cover_image}
          genres={movieInfo.genres}
          rating={movieInfo.rating}
        />
      }
    </>
  );
}

export default Detail;