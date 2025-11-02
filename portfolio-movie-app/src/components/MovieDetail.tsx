/**
 * components
 * MovieDetail.tsx
**/

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MovieDetailBox = styled.div`
  .btnBack {
    display: flex;
    align-items: center;
    gap: 0 1rem;
    margin: 1rem;
    padding: 1rem 2rem;
    border: none;

    span {
      color: #e5e5e5;
      font-weight: 700;
      opacity: 0;
      transition: all .4s;
    }

    i {
      display: inline-block;
      width: 2rem;
      height: 2rem;
      background-color: #e5e5e5;
      mask: url('/src/assets/icon/icon_back.svg') no-repeat;
    }

    &:hover {
      span {
        opacity: 1;
      }
    }
  }

  figure {
    margin: 2rem 3rem;

    h3 {
      font-size: 3rem;
    }

    img {
      width: 40rem;
      max-width: 80vw;
      object-fit: contain;
      border-radius: 2rem;
    }

    dl {
      display: flex;
      gap: 0 1rem;
      font-size: 1.5rem;

      dt {
        min-width: 4rem;
        font-weight: 700;
      }

      dd {
      margin: 0;
      }
    }

    .btnToggle {
      margin-bottom: 2rem;
      padding: 0 1.5rem;
      height: 3rem;
      color: #dcdcdc;
      font-weight: 700;
      line-height: 2.8rem;
      border: 1px solid #dcdcdc;
      border-radius: .4rem;
      transition: all .4s;

      &:hover {
        color: #141414;
        background-color: #dcdcdc;
      }
    }

    .genreList {
      display: flex;
      gap: 1rem;

      li span {
        padding: .5rem .8rem .4rem;
        color: #141414;
        font-size: 1.4rem;
        border-radius: .4rem;
        background-color: #e5e5e5;
      }
    }
  }
`;

interface Props {
  title: string;
  year: number;
  summary: string;
  description?: string;
  coverImg: string;
  genres: string[];
  rating: number;
}

function MovieDetail({title, year, summary, description, coverImg, genres, rating}: Props) {
  // 목록보기
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  // 설명글 토글
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 500;

  const displayText = (text: string): string => {
    if (isExpanded || text.length <= MAX_LENGTH) return text;
    return text.slice(0, MAX_LENGTH) + "...";
  }

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <MovieDetailBox>
      <button onClick={handleBack} className="btnBack" aria-label="목록보기"><i></i><span>목록보기</span></button>
      <figure>
        <img src={coverImg} alt={`${title} 포스터`} />
        <figcaption>
          <h3>{title}</h3>
          <dl>
            <dt>개봉</dt>
            <dd>{year}</dd>
          </dl>
          <dl>
            <dt>평점</dt>
            <dd>⭐️ {rating}</dd>
          </dl>
          {(description || summary) && (
            <div>
              <p>{displayText(description || summary)}</p>
              {(description || summary).length > MAX_LENGTH && (
                <button onClick={toggleExpand} className="btnToggle" aria-expanded={isExpanded}>
                  {isExpanded ? "접기" : "전체보기"}
                </button>
              )}
            </div>
          )}
          <ul className="genreList" aria-label="장르 리스트">
            {genres.map((g) => (
              <li key={g}><span>{g}</span></li>
            ))}
          </ul>
        </figcaption>
      </figure>
    </MovieDetailBox>
  )
}

export default MovieDetail;