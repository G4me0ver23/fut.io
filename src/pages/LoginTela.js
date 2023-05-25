import styles from "../styles/LoginTela.module.css";
import stgen from "../styles/General.module.css";
import Forget from "../img/Forget.png";
import Login from "../img/Login.png";
import EnterRoxo from "../img/EnterRoxo.png";
import CriarConta from "../img/CriarConta.png";
import MenuTop from "../components/MenuTop.js";
import React from 'react';
import { Link } from "react-router-dom";
import DadosLogin from "../components/DadosLogin";
function LoginTela() {
  return (
    <div className={styles.BackGround}>
      <MenuTop />
      <div className={styles.Login}>
        <img src={Login} height="57" />
      </div>

      <div>
        <DadosLogin />

        <div>
          <Link to='/helptela'>
            <button
              className={stgen.Botao}
              style={{
                height: 25,
                width: 100,
                marginTop: 2,
                marginLeft: 99
              }}
            >
              <img src={Forget} height="17px" />
            </button>
          </Link>
        </div>

        <div>
          <Link to='/maintela'>
            <button
              className={stgen.Botao}
              style={{
                height: 50,
                width: 145,
                marginLeft: 77
              }}
            >
              <img src={EnterRoxo} height="50px" />
            </button>
          </Link>
        </div>

        <div>
          <Link to='/cadastrotela'>
            <button
              className={stgen.Botao}
              style={{
                height: 25,
                width: 120,
                marginLeft: 91
              }}
            >
              <img src={CriarConta} height="20px" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginTela;
