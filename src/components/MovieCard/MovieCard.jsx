import PropTypes from 'prop-types';
import defaultImg from '../../images/defaul_img.png';

import { Link, useLocation, useRouteMatch } from 'react-router-dom';

import styles from './MovieCard.module.css';

export default function MovieCard({ movies }) {
  const { url } = useRouteMatch();
  const location = useLocation();

  return (
    <div className={styles.container}>
      <ul className={styles.cards_wrap}>
        {movies.map(movie => (
          <li key={movie.id} className={styles.card_box}>
            <img
              className={styles.card_poster}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              alt={movie.original_name}
            />
            <div className={styles.card_body}>
              <Link
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: {
                    from: { location, label: 'back to movies-page' },
                  },
                }}
                style={{ textDecoration: 'none' }}
              >
                <h5 className={styles.card_title}>{movie.title}</h5>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

MovieCard.propTypes = {
  movies: PropTypes.array.isRequired,
};
