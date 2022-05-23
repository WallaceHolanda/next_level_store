import { Link } from 'react-router-dom';
import { Steps } from 'rsuite';

import 'rsuite/dist/rsuite.min.css';

import PagePreviousIcon from '@rsuite/icons/PagePrevious';
import styles from '../../FormularioLogin/FormularioLogin.module.css';
import stylesCNPJ from './FormularioCNPJ.module.css';

function FormularioTerceiroPassoCNPJ() {
    return (

        <div className={styles.div_formulario_login}>

            <Link to="/cadastrocnpjp2" className={stylesCNPJ.linkback}><PagePreviousIcon /> Voltar</Link>
            <p className={stylesCNPJ.bem_vindo}>Crie sua conta</p>

            <p className={stylesCNPJ.sub_titulo}>
                Digite os dados da empresa para ter acesso às ofertas e promoções
            </p>

            <Steps current={2} className={stylesCNPJ.steps}>
                <Steps.Item />
                <Steps.Item />
                <Steps.Item />
            </Steps>

            <form>
                <label className={stylesCNPJ.label}>Nome </label>
                <input className={stylesCNPJ.input} type="text" name="nome" placeholder="Digite o nome do titular" />

                <label className={stylesCNPJ.label}>CNPJ ou CPF </label>
                <input className={stylesCNPJ.input} type="text" name="documento" placeholder="Digite o número do CNPJ ou CPF" />

                <div className={stylesCNPJ.divflex}>
                    <div className={stylesCNPJ.divfield}>
                        <label className={stylesCNPJ.label}>Banco</label>
                        <input className={stylesCNPJ.input} type="text" name="banco" placeholder="Digite o nome do banco" />
                    </div>

                    <div className={stylesCNPJ.divfieldwithoutpadding}>
                        <label className={stylesCNPJ.label}>Tipo de Conta </label>
                        <input className={stylesCNPJ.input} type="text" name="tipoconta" placeholder="Digite o tipo da sua conta" />
                    </div>

                </div>

                <div className={stylesCNPJ.divflex}>
                    <div className={stylesCNPJ.divfield}>
                        <label className={stylesCNPJ.label}>Agência</label>
                        <input className={stylesCNPJ.input} type="text" name="agencia" placeholder="Digite o nome da sua agência" />
                    </div>

                    <div className={stylesCNPJ.divfieldwithoutpadding}>
                        <label className={stylesCNPJ.label}>Numero da conta </label>
                        <input className={stylesCNPJ.input} type="text" name="numeroconta" placeholder="Digite o número da conta" />
                    </div>
                </div>

            </form>

            <Link to="/login" className={stylesCNPJ.button}>Continuar</Link>

        </div>
    );
}

export default FormularioTerceiroPassoCNPJ;