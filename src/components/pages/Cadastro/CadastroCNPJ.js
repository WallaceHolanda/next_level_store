import imagemLogo from '../../../img/logo.png';
import Logo from '../../Logo/Logo';

import styles from '../Login/Login.module.css';
import FormularioPrimeiroPassoCNPJ from '../../FormularioCadastro/CadastroCNPJ/FormularioPrimeiroPassoCNPJ';

function CadastroCPF(){
    return (
        <div className={styles.div_geral}>
            <div className={styles.div_logo}>
                <Logo
                    logo={imagemLogo}
                    frase="O seu Marketplace de Jogos e Consoles"
                />
            </div>

            <div className={styles.div_login}>
                <FormularioPrimeiroPassoCNPJ />
            </div>
        </div>
    );
}

export default CadastroCPF;