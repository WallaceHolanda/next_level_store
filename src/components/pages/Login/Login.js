import styles from './Login.module.css';

import imagemLogo from '../../../img/logo.png';
import Logo from '../../Logo/Logo';
import FormularioLogin from '../../FormularioLogin/FormularioLogin';

function Login() {
    return (
        <div className={styles.div_geral}>
            <div className={styles.div_logo}>
                <Logo
                    logo={imagemLogo}
                    frase="O seu Marketplace de Jogos e Consoles"
                />
            </div>

            <div className={styles.div_login}>
                <FormularioLogin />

            </div>


        </div>
    );
}

export default Login;