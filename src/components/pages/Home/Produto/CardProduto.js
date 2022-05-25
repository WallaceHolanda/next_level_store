import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import styles from './CardProduto.module.css';
import item1 from '../../../../img/game.png';
import item2 from '../../../../img/smartphone2.png';
import { Link } from 'react-router-dom';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3500, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1500, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function CardProduto({titulo}) {
    return (
      <div>
        <p className={styles.title}>{titulo}</p>
        <Carousel className={styles.card_list} responsive={responsive}>
            <div className={styles.card}>
              <img className={styles.img2} src={item2} alt="Item1"/>
              <p className={styles.product_title}>Smartphone Xiaomi Redmi Note 9s</p>
              <p className={styles.product_price}> R$1699,00</p>
              <p className={styles.product_store}>Maria Store</p>
              <Link to='/visualizarproduto'><button className={styles.button}>Adicionar ao Carrinho</button></Link>
            </div>

            <div className={styles.card}>
              <img className={styles.img} src={item1} alt="Item1"/>
              <p className={styles.product_title}>GTA San Andreas - Ps3 Version</p>
              <p className={styles.product_price}> R$55,00</p>
              <p className={styles.product_store}>Maria Store</p>
              <button className={styles.button}>Adicionar ao Carrinho</button>
            </div>

            <div className={styles.card}>
              <img className={styles.img} src={item1} alt="Item1"/>
              <p className={styles.product_title}>GTA San Andreas - Ps3 Version</p>
              <p className={styles.product_price}> R$55,00</p>
              <p className={styles.product_store}>Maria Store</p>
              <button className={styles.button}>Adicionar ao Carrinho</button>
            </div>

            <div className={styles.card}>
              <img className={styles.img} src={item1} alt="Item1"/>
              <p className={styles.product_title}>GTA San Andreas - Ps3 Version</p>
              <p className={styles.product_price}> R$55,00</p>
              <p className={styles.product_store}>Maria Store</p>
              <button className={styles.button}>Adicionar ao Carrinho</button>
            </div>

            <div className={styles.card}>
              <img className={styles.img} src={item1} alt="Item1"/>
              <p className={styles.product_title}>GTA San Andreas - Ps3 Version</p>
              <p className={styles.product_price}> R$55,00</p>
              <p className={styles.product_store}>Maria Store</p>
              <button className={styles.button}>Adicionar ao Carrinho</button>
            </div>
        </Carousel>

      </div>
        
    );
}

export default CardProduto;