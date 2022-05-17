import { Link } from 'react-router-dom';
import styles from '../FormularioLogin/FormularioLogin.module.css';
import stylesCPF from './FormularioCPF.module.css';

function FormularioCPF() {
    return (
        <div className={styles.div_formulario_login}>
            <p className={styles.bem_vindo}>Crie sua conta</p>

            <p className={stylesCPF.sub_titulo}>
                Digite seus dados pessoais para ter acesso à todas as ofertas e promoções
            </p>

            <form>
                <label className={stylesCPF.label}>Nome </label>
                <input className={stylesCPF.input} type="text" name="nome" placeholder="Insira seu nome" />

                <label className={stylesCPF.label}>CPF </label>
                <input className={stylesCPF.input} type="text" name="cpf" placeholder="000.000.000-00" />

                <label className={stylesCPF.label}>Data de nascimento </label>
                <input className={stylesCPF.input} type="date" name="nascimento" placeholder="Selecione uma data"/>

                <label className={stylesCPF.label}>E-mail</label>
                <input className={stylesCPF.input} type="email" name="email" placeholder="Digite seu e-mail"/>

                <label className={stylesCPF.label}>Senha</label>
                <input className={stylesCPF.input} type="password" name="senha" placeholder="Insira uma senha forte" />
            </form>

            <Link to="/login" className={stylesCPF.button}>Criar sua conta</Link>

        </div>
    );
}

export default FormularioCPF;