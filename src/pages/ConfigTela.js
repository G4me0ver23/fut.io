import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/ConfigTela.module.css";
import stgen from "../styles/General.module.css";
import Seta from "../img/Seta.png"
function ConfigTela(){
    return(
        <div className={styles.BackGround}>
            <div className={styles.Back}>
                <Link to='/pritela'>
                    <button className={stgen.Botao} styles={{marginLeft: 0}}>
                        <img src={Seta} height="19px"/>
                    </button>
                </Link>
            </div>
            <div className={styles.Config}>
                <h1>Configurações</h1>
                <h2>Alterar Nome</h2>
                <input type="text" placeholder="Reginaldo da Silva Santos" />
                <h2>Localização</h2>
                <input type="search" placeholder="Brasil, Alagoas, Maceió, Farol" />
            </div>
            <div className={styles.OpcCheck}>
                <input type="checkbox" placeholder="Brasil, Alagoas, Maceió, Farol"  />
                <label>Ocultar seus Dados</label><br/>
                <input type="checkbox" placeholder="Brasil, Alagoas, Maceió, Farol" />
                <label>Notificações</label><br/>
            </div>
        </div>
    )
}
export default ConfigTela;