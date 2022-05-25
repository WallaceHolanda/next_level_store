import StatusBar from "../../layout/StatusBar/StatusBar";
import styles from './Pagamento.module.css';
import { Link } from 'react-router-dom';

import Footer from "../../layout/Footer";

function Pagamento(){
    return (
        <div>
            <StatusBar />
            <h3 className={styles.titulo}>Carrinho de Compras</h3>

            <div className={styles.divcentral}>
                <div className={styles.quantidadepreco}>
                    <h4>Selecione uma forma de pagamento</h4>
                </div>

                <div className={styles.divsubtotal}>

                    <div className={styles.formaspagamento}>

                        <div className={styles.cardpagamento}>
                            <h5>Boleto</h5>

                            <p>
                                Vencimento em 1 dia útil. A data de entrega será alterada 
                                devido ao tempo de processamento do Boleto. Veja mais 
                                na próxima página
                            </p>
                        </div>

                        <div className={styles.cardpagamento}>
                            <h5>Cartão de crédito</h5>

                            <p>
                            Aceitamos várias bandeiras de cartão de crédito, fique a vontade!
                            </p>
                        </div>
                    </div>

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
            <Footer />
        </div>

    );
}

export default Pagamento;