/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router-dom';

import ReactStars from "react-rating-stars-component";
import SearchIcon from '@rsuite/icons/Search';

import styles from './Produto.module.css';
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import CardProduto from '../Home/Produto/CardProduto';
import produtoImage from '../../../img/smartphone.png';

function Produto() {
    return (
        <div>

            <div className={styles.divbusca}>
                <input className={styles.inputbusca} placeholder="O que você está procurando? "/>
                <button className={styles.buttonbusca}><SearchIcon /></button>
            </div>

            <Navbar />
            <h2 className={styles.nomeproduto}> Smartphone Xiaomi Redmi Note 9s </h2>

            <div className={styles.divcentral}>
                <Row className={styles.opcoesproduto}>
                    <a href="#"> Código: 00928477126 |</a>
                    <a href="#"> Descrição completa |</a>
                    <a href="#"> Xiaomi</a>
                </Row>

                <div className={styles.panel}>
                    <Column>

                        <div className={styles.galeria}>
                            <img className={styles.imgcelular} src={produtoImage} />
                        </div>

                    </Column>


                    <Column className={styles.segundaColuna}>
                        <label className={styles.label}>Cor </label>
                        <select className={styles.input}>
                            <option value="azul">Azul</option>
                            <option value="diamante">Diamante</option>
                        </select>

                        <label className={styles.label}>Armazenamento </label>
                        <select className={styles.input}>
                            <option value="128">128 GB</option>
                            <option value="254">254 GB</option>
                        </select>

                        <p>Vendido e entregue por CrazyCell</p>
                        <p>De: R$ 1700,00</p>
                        <h4>Por: R$ 1699,00</h4>

                        <div className={styles.estrelas}>
                            <p className={styles.textoestrelas}>Avaliação </p>
                            <ReactStars
                                count={5}
                                value={5}
                                size={23}
                                activeColor="#ffd700"
                            />
                        </div>

                        <Link to="/cadastrocnpjp2" className={styles.button}>Continuar</Link>

                    </Column>
                </div>

                <h3 className={styles.produtoinfo}>Informações do Produto</h3>
                <p className={styles.descricao}>
                    Smartphone Xiaomi Redmi Note 9S 64GB Cinza 4G+ - 4GB RAM Tela 6,67” Câm. Quádrupla + Selfie 16MP
                    Tenha um smartphone diferenciado em suas mãos! O Redmi Note 9S da Xiaomi produz fotos de nível
                    profissional, pois oferece um conjunto de 04 câmeras na traseira, permitindo que você capte as
                    melhores fotografias em qualquer situação de luz. Faça fotos criativas e compartilhe nas redes
                    sociais, através da câmera de selfie de 16MP. Sua tela de 6,67" LCD IPS, resolução FHD+ e HDR10
                    oferecem a melhor experiência para você ver seus conteúdos de maneira mais imersiva e com visual
                    impressionante. Tem 64GB de armazenamento interno, ele é ideal para guardar suas fotos, músicas
                    ou vídeos!
                </p>

                <CardProduto titulo="Quem viu esse produto viu estes também" />
                <CardProduto titulo="Produtos Similares" />

            </div>

            <Footer />
        </div>
    );
}

export default Produto;