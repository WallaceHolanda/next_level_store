import StatusBar from "../../layout/StatusBar/StatusBar";
import styles from './Carrinho.module.css';

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

                    </div>

                    <div className={styles.quantidade}>

                    </div>

                    <div className={styles.preco}>
                        <div className={styles.novopreco}>
                            <p>De: R$ 1700,00 por</p>
                            <p>R$ 1800,00 ou</p>
                            <p>R$ 1699,00 à vista</p>
                        </div>


                    </div>

                </div>

            </div>

        </div>
    );
}

export default Carrinho;