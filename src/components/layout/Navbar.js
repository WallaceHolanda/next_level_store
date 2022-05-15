import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                </li>

                <li className={styles.item}>
                    <Link to="/">Venda na Next Level</Link>
                </li>

                <li className={styles.item}>
                    <Link to="/">Ofertas do Dia</Link>
                </li>

                <li className={styles.item}>
                    <Link to="/">Celulares</Link>
                </li>

                <li className={styles.item}>
                    <Link to="/">Tv e Vídeo</Link>
                </li>

                <li className={styles.item}>
                    <Link to="/">Informática</Link>
                </li>
            </ul>
        </nav>
    );

}

export default Navbar;