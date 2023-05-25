import stgen from "../styles/General.module.css";
import MenuRoxo from "../img/MenuRoxo.png";
import InterrogacaoRoxa from "../img/InterrogacaoRoxa.png";
import React from 'react';
import { Link } from "react-router-dom";
function MenuTop() {
  return (
    <div className={stgen.MenuTop}>
      <div>
        <button
          className={stgen.Botao}
          style={{
            height: 30,
            width: 30,
            marginTop: 8
          }}
        >
          <img src={MenuRoxo} height="30" width="30" />
        </button>
      </div>
      <div></div>
      <div>
        <Link to='/helptela'>
          <button
            className={stgen.Botao}
            style={{
              height: 35,
              width: 35,
              marginTop: 8
            }}
          >
            <img src={InterrogacaoRoxa} height="37" />
          </button>
        </Link>
      </div>
    </div>
  );
}
export default MenuTop;
