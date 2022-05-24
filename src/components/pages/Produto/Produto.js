/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Row, Column } from 'react-foundation';
// import { Panel } from 'rsuite';

import styles from './Produto.module.css';

import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import CardProduto from '../Home/Produto/CardProduto';
import produtoImage from '../../../img/smartphone.png';

function Produto() {
    return (
        <div>
            <Navbar />
            <p> Smartphone Xiaomi Redmi Note 9s </p>

            <div className={styles.divcentral}>
                <Row>
                    <a href="#"> Código: 00928477126 |</a>
                    <a href="#"> Descrição completa |</a>
                    <a href="#"> Xiaomi</a>
                </Row>

                <div className={styles.panel}>
                    <Column className={styles.primeiracoluna}>

                        <div className={styles.galeria}>
                            <img className={styles.imgcelular} src={produtoImage} />
                        </div>

                    </Column>


                    <Column>
                        <h1>Texto</h1>
                        <p>Smartphone Xiaomi Redmi Note 9S 64GB Cinza 4G</p>

                        <h1>Texto</h1>
                        <p>Smartphone Xiaomi Redmi Note 9S 64GB Cinza 4G</p>

                        <h1>Texto</h1>
                        <p>Smartphone Xiaomi Redmi Note 9S 64GB Cinza 4G</p>

                        <h1>Texto</h1>
                        <p>Smartphone Xiaomi Redmi Note 9S 64GB Cinza 4G</p>


                    </Column>
                </div>

                <p>
                    Smartphone Xiaomi Redmi Note 9S 64GB Cinza 4G+ - 4GB RAM Tela 6,67” Câm. Quádrupla + Selfie 16MP
                    Tenha um smartphone diferenciado em suas mãos! O Redmi Note 9S da Xiaomi produz fotos de nível
                    profissional, pois oferece um conjunto de 04 câmeras na traseira, permitindo que você capte as
                    melhores fotografias em qualquer situação de luz. Faça fotos criativas e compartilhe nas redes
                    sociais, através da câmera de selfie de 16MP. Sua tela de 6,67" LCD IPS, resolução FHD+ e HDR10
                    oferecem a melhor experiência para você ver seus conteúdos de maneira mais imersiva e com visual
                    impressionante. Tem 64GB de armazenamento interno, ele é ideal para guardar suas fotos, músicas
                    ou vídeos!
                </p>

                <CardProduto titulo = "Produtos Mais Vendidos" />  

            </div>

            <Footer />
        </div>
    );
}

export default Produto;