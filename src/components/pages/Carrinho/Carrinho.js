import StatusBar from "../../layout/StatusBar/StatusBar";
import styles from './Carrinho.module.css';
import { Link } from 'react-router-dom';

import smartphoneimg from '../../../img/xbox.png';

function Carrinho() {
    return (
        <div>
            <StatusBar />
            <h3 className={styles.titulo}>Carrinho de Compras</h3>

            <div className={styles.divcentral}>
                <div className={styles.quantidadepreco}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            Quantidade
                        </li>

                        <li className={styles.item}>
                            Preço
                        </li>
                    </ul>
                </div>

                <div className={styles.divinfo}>
                    <div className={styles.produto}>
                        <img className={styles.prodimg} src={smartphoneimg} alt="produto" />
                        <div className={styles.descprod}>
                            <h4>Xbox One S</h4>
                            <p>Código do produto: 00928477126</p>
                            <h6>Vendido e entregue por Pstore</h6>
                        </div>

                    </div>

                    <div className={styles.quantidade}>
                        <select className={styles.input}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>

                    <div className={styles.preco}>
                        <div className={styles.novopreco}>
                            <p>De: R$ 1700,00 por</p>
                            <p>R$ 1800,00 ou</p>
                            <p>R$ 1699,00 à vista</p>
                        </div>
                    </div>
                </div>

                <div className={styles.divsubtotal}>

                    <div className={styles.subtotal}>
                        <h5>Subtotal: (1 Item)</h5>

                    </div>

                    <div className={styles.valor}>
                        <div className={styles.novopreco}>
                            <p>De: R$ 1700,00 por</p>
                            <p>R$ 1800,00 ou</p>
                            <p>R$ 1699,00 à vista</p>
                        </div>

                        <Link to="/" className={styles.button}>Continuar</Link>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Carrinho;