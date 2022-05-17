import { Link } from 'react-router-dom';
import styles from './FormularioLogin.module.css';

function FormularioLogin() {
    return (
        <div className={styles.div_formulario_login}>
            <p className={styles.bem_vindo}>Bem-vindo!</p>

            <p className={styles.sub_titulo}>Faça seu Login para ter acesso à plataforma</p>

            <form>
                <label className={styles.label}>E-mail </label>
                <input className={styles.input} type="email" name="email" placeholder="Digite seu e-mail" />

                <label className={styles.label}>Senha </label>
                <input className={styles.input} type="password" name="senha" placeholder="Digite sua senha" />
            </form>

            <Link to="/" className={styles.button}>Entrar</Link>
            <p className={styles.sem_conta}>Não possui uma conta? <Link to="/cadastrocpf">Cadastre-se</Link></p>
            <p className={styles.sem_conta}>É pessoa jurídica? <Link to="/">Clique aqui</Link></p>

        </div>
    );

}

export default FormularioLogin;