import { Link } from 'react-router-dom';
import { Steps } from 'rsuite';

import 'rsuite/dist/rsuite.min.css';

import styles from '../../FormularioLogin/FormularioLogin.module.css';
import stylesCNPJ from './FormularioCNPJ.module.css';

function FormularioSegundoPassoCNPJ() {
    return (

        <div className={styles.div_formulario_login}>
            <p className={styles.bem_vindo}>Crie sua conta</p>

            <p className={stylesCNPJ.sub_titulo}>
                Digite os dados da empresa para ter acesso às ofertas e promoções
            </p>

            <Steps current={1} className={stylesCNPJ.steps}>
                <Steps.Item />
                <Steps.Item />
                <Steps.Item />
            </Steps>

            <form>
                <label className={stylesCNPJ.label}>Endereço </label>
                <input className={stylesCNPJ.input} type="text" name="endereco" placeholder="Digite o endereço da sua empresa" />

                <div className={stylesCNPJ.divflex}>
                    <div className={stylesCNPJ.divfield}>
                        <label className={stylesCNPJ.label}>Bairro </label>
                        <input className={stylesCNPJ.input} type="text" name="bairro" placeholder="Digite o bairro" />
                    </div>

                    <div>
                        <label className={stylesCNPJ.label}>Número </label>
                        <input className={stylesCNPJ.input} type="text" name="numero" placeholder="Digite o número" />
                    </div>

                </div>

                <div className={stylesCNPJ.divflex}>
                    <div className={stylesCNPJ.divfield}>
                        <label className={stylesCNPJ.label}>Cidade </label>
                        <input className={stylesCNPJ.input} type="text" name="cidade" placeholder="Digite a cidade" />
                    </div>

                    <div>
                        <label className={stylesCNPJ.label}>Estado </label>
                        <input className={stylesCNPJ.input} type="text" name="estado" placeholder="Digite o estado" />
                    </div>
                </div>

            </form>

            <Link to="/login" className={stylesCNPJ.button}>Continuar</Link>

        </div>
    );
}

export default FormularioSegundoPassoCNPJ;