import { Link } from 'react-router-dom';
import { Steps } from 'rsuite';
import styles from '../../FormularioLogin/FormularioLogin.module.css';
import stylesCPF from '../CadastroCPF/FormularioCPF.module.css';


function FormularioPrimeiroPassoCNPJ() {
    return (

        <div className={styles.div_formulario_login}>
            <p className={styles.bem_vindo}>Crie sua conta</p>

            <p className={stylesCPF.sub_titulo}>
                Digite os dados da empresa para ter acesso às ofertas e promoções
            </p>

            <Steps current={1}>
                <Steps.Item />
                <Steps.Item />
                <Steps.Item />
                <Steps.Item />
            </Steps>

            <form>
                <label className={stylesCPF.label}>Razão Social </label>
                <input className={stylesCPF.input} type="text" name="razaosocial" placeholder="Insira a razão social da sua empresa" />

                <label className={stylesCPF.label}>Nome Fantasia </label>
                <input className={stylesCPF.input} type="text" name="nomefantasia" placeholder="Insira o nome fantasia da sua empresa" />

                <label className={stylesCPF.label}>CNPJ </label>
                <input className={stylesCPF.input} type="text" name="cnpj" placeholder="Digite o número do CNPJ" />

                <label className={stylesCPF.label}>Telefone </label>
                <input className={stylesCPF.input} type="tel" name="telefone" placeholder="Digite o telefone da empresa" />

                <label className={stylesCPF.label}>E-mail</label>
                <input className={stylesCPF.input} type="email" name="email" placeholder="Digite seu e-mail" />

            </form>

            <Link to="/login" className={stylesCPF.button}>Continuar</Link>

        </div>
    );
}

export default FormularioPrimeiroPassoCNPJ;