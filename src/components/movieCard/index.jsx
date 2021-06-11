import style from './movieCard.module.css'
import noPoster from './no-poster-available.jpg'

const IMG_URL = 'https://image.tmdb.org/t/p/w200'

const MovieCard = ({ title, name, poster_path }) => {
  return (
    <div className={style.card}>
      <img src={poster_path ? `${IMG_URL}${poster_path}` : noPoster} alt={title || name} />
      <div className={style.cardBody}>
        <h4 className={style.cardTitle}>{title || name}</h4>
      </div>
    </div>
  );
}

export default MovieCard;