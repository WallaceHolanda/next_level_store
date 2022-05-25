import { Link } from 'react-router-dom';
import styles from './StatusBar.module.css';

function StatusBar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <li className={styles.selecionado}>
                    <Link className={styles.selecionado} to="/">Sacola</Link>
                </li>

                <li className={styles.item}>
                    <Link to="/">Pagamento</Link>
                </li>

                <li className={styles.item}>
                    <Link to="/">Transporte</Link>
                </li>

            </ul>
        </nav>
    );
}

export default StatusBar;