import styles from './Logo.module.css';



function Logo({ logo, frase }) {
    return (
        <div className={styles.div_logo}>
            <img className={styles.img_logo} src={logo} alt="logo" />
            <p className={styles.frase}>{frase}</p>
        </div>

    );

}

export default Logo;