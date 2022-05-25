import styles from './SearchBar.module.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@rsuite/icons/Search';

import carrinhoImage from '../../../img/carrinho.png';

function SearchBar() {
    return (
        <div className={styles.divbusca}>
            <input className={styles.inputbusca} placeholder="O que você está procurando? " />
            <button className={styles.buttonbusca}><SearchIcon /></button>

            <div className={styles.diventreoucadastre}>
                <Link className={styles.entreoucadastre} to="/login">Olá, tudo bem? <br></br>Entre ou cadastre-se!</Link>
            </div>
            
            <Link to="/carrinho" className={styles.carrinho}><img src={carrinhoImage} alt="Carrinho"/></Link>
            
        </div>
    );
}

export default SearchBar;