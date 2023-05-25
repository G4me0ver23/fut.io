import styles from "../styles/LoginTela.module.css";
import React from "react";
function DadosLogin(props){
    return(
        <div className={styles.DadosLogin}>
            <h3>Email:</h3>
            <input type="text" name="email" placeholder="ex: silvxcleiton06@gmail.com" onChange={props.handleChange} />
            <h3>Senha:</h3>
            <input type="password" name="password" onChange={props.handleChange} />
        </div>
    )
}
export default DadosLogin;