import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from './Carrossel.module.css';
import imagem1 from '../../../../img/propaganda.png';


function Carrossel() {
    return (
        <Carousel showThumbs={false} showStatus={false}>
            <div className={styles.div}>
                <img className={styles.img1} src={imagem1} alt="imagem" />
            </div>

            <div className={styles.div}>
                <img className={styles.img1} src={imagem1} alt="imagem" />
            </div>

            <div className={styles.div}>
                <img className={styles.img1} src={imagem1} alt="imagem" />
            </div>
        </Carousel>
    );
}

export default Carrossel;