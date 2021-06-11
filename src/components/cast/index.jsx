import noImg from './noImg.png'
import style from './cast.module.css';


const IMG_URL = 'https://image.tmdb.org/t/p/w200'

const Cast = ({ cast }) => {
  return (
    <ul className={style.castList}>
      {cast.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          <div className={style.card}>
            {<img className={style.castImg} src={profile_path ? `${IMG_URL}${profile_path}` : noImg} alt={`${name}`} />}
            <div className={style.cardBody}>
              <p>Actor: <strong>{name}</strong></p>
              <p>Character: <strong>{character}</strong></p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Cast;