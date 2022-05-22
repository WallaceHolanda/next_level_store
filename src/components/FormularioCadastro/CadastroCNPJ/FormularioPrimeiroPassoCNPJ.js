import { Link } from 'react-router-dom';
import { Steps } from 'rsuite';

import 'rsuite/dist/rsuite.min.css';

import styles from '../../FormularioLogin/FormularioLogin.module.css';
import stylesCNPJ from './FormularioCNPJ.module.css';

function FormularioPrimeiroPassoCNPJ() {
    return (

        <div className={styles.div_formulario_login}>
            <p className={styles.bem_vindo}>Crie sua conta</p>

            <p className={stylesCNPJ.sub_titulo}>
                Digite os dados da empresa para ter acesso às ofertas e promoções
            </p>

            <Steps current={0} className = {stylesCNPJ.steps}>
                <Steps.Item />
                <Steps.Item />
                <Steps.Item />
            </Steps>

            <form>
                <label className={stylesCNPJ.label}>Razão Social </label>
                <input className={stylesCNPJ.input} type="text" name="razaosocial" placeholder="Insira a razão social da sua empresa" />

                <label className={stylesCNPJ.label}>Nome Fantasia </label>
                <input className={stylesCNPJ.input} type="text" name="nomefantasia" placeholder="Insira o nome fantasia da sua empresa" />

                <label className={stylesCNPJ.label}>CNPJ </label>
                <input className={stylesCNPJ.input} type="text" name="cnpj" placeholder="Digite o número do CNPJ" />

                <label className={stylesCNPJ.label}>Telefone </label>
                <input className={stylesCNPJ.input} type="tel" name="telefone" placeholder="Digite o telefone da empresa" />

                <label className={stylesCNPJ.label}>E-mail</label>
                <input className={stylesCNPJ.input} type="email" name="email" placeholder="Digite seu e-mail" />

            </form>

            <Link to="/cadastrocnpjp2" className={stylesCNPJ.button}>Continuar</Link>

        </div>
    );
}

export default FormularioPrimeiroPassoCNPJ;