
function MovieDetail({title, year, description, coverImg, genres, rating}) {
  return (
    <div>
      <h2>{title}</h2>
      <figure>
        <div>
          <img src={coverImg} alt={title} />
        </div>
        <figcaption>
          <p>{year}</p>
          <p>{rating}</p>
          <p>{description}</p>
          <ul>
            {genres.map((g) =>
              <li key={g}>{g}</li>
            )}
          </ul>
        </figcaption>
      </figure>
    </div>
  )
}

export default MovieDetail;