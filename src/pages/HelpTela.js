import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/HelpTela.module.css";
import stgen from "../styles/General.module.css";
import Seta from "../img/Seta.png"
function HelpTela(){
    return(
        <div className={styles.BackGround}>
            <div className={styles.Back}>
                <Link to='/pritela'>
                    <button className={stgen.Botao} styles={{marginLeft: 0}}>
                        <img src={Seta} height="19px"/>
                    </button>
                </Link>
            </div>
            <div className={styles.Help}>
                <h1>Ajuda e Feedback</h1>
                <ul>
                    <h3><Link to='/recsenha'>Recuperar Senha</Link></h3>
                    <h3><Link to='/configtela'>Alterar as configurações do App</Link></h3>
                </ul>
            </div>

            <div className={styles.PesqeFeed}>
                <input type="text" placeholder="Pesquisar Ajuda" />
                <h3><Link to='/feedback'>Enviar Feedback</Link></h3>
            </div>
        </div>
    )
}
export default HelpTela;