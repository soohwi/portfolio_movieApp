/**
 * pages/Home
 * HomeHeader.tsx
**/

import styled from "styled-components";

//< style
const Header = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;
  height: 7rem;
  background-color: #141414;

  .headerInner {
    display: flex;
    align-items: center;
    gap: 0 5rem;
    margin: 0 auto;
    max-width: 90vw;
    height: 100%;
  }

  h1 {
    color: #e50914;
    font-size: 3rem;

    span {
      color: #e5e5e5;
      font-weight: 400;
      font-size: 1.4rem;
    }
  }
`;

const GenreMenu = styled.ul`
  display: flex;
  gap: 0 1rem;

  a {
    font-weight: 500;
    transition: color .4s;

    &:hover {
      color: #b3b3b3;
    }
  }
`;
//> style

interface Props {
  total: number;
  genreList: string[];
}

function HomeHeader({ total, genreList }: Props) {
  return (
    <Header>
      <div className="headerInner">
        <h1>Hmovie <span>({total})</span></h1>
        <nav aria-label="장르별 메뉴">
          <GenreMenu>
            {genreList.map((genre) => (
              <li key={genre}>
                <a href={`#${genre}`}>{genre}</a>
              </li>
            ))}
          </GenreMenu>
        </nav>
      </div>
    </Header>
  )
}

export default HomeHeader;
