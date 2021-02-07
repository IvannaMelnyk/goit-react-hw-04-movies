import Navigation from '../Navigation/Navigation';
import styles from './AppBar.module.css';

export default function Appbar() {
  return (
    <header className={styles.Searchbar}>
      <Navigation />
    </header>
  );
}
