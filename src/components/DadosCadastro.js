import styles from "../styles/LoginTela.module.css";
import stgen from "../styles/General.module.css";
import React, { useState } from "react";
import DadosLogin from "./DadosLogin";
import Cadastrar from "../img/Cadastrar.png";
import { Link } from "react-router-dom";

function DadosCadastro(props){
  const datasUser = {id:null, name:'', email:'', password:''}
  const [user, setUser] = useState(datasUser)
  const handleChange = e =>{
    const {name, value} = e.target
    setUser({...user, [name]: value})
  }
  const handleSubmit = e => {
    e.preventDefault();
    if(user.name && user.email){
        handleChange(e, props.newUser(user))
    }
    console.log(user)
  }
    return(
        <div className={styles.DadosLogin}>
            <h3>Nome:</h3>
            <input type="text" name="name" onChange={handleChange} placeholder="Reginaldo da Silva Santos" />
            <DadosLogin setUser={setUser} handleChange={handleChange} />
            <h3>Confirmar senha:</h3>
            <input type="password" name="confirm_password" />
            <Link to='/logintela'>
                <button
                className={stgen.Botao}
                style={{
                    height: 50,
                    width: 145,
                    marginTop: 14,
                    marginLeft: 77
                }}
                onClick={handleSubmit}
                >
                <img src={Cadastrar} height="40px" />
                </button>
            </Link>
        </div>
    )
}
export default DadosCadastro;