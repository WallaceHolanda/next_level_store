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
                    <Link to="/">Jogos em Pré-Venda</Link>
                </li>

                <li className={styles.item}>
                    <Link to="/">Celulares</Link>
                </li>

                <li className={styles.item}>
                    <Link to="/">Consoles</Link>
                </li>

                <li className={styles.item}>
                    <Link to="/">Smartwatches</Link>
                </li>

                <li className={styles.item}>
                    <Link to="/">Headphones</Link>
                </li>

                <li className={styles.item}>
                    <Link to="/">Webcams</Link>
                </li>
                
            </ul>
        </nav>
    );

}

export default Navbar;