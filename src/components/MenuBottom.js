import Linha from "../img/Linha.png";
import Halter from "../img/Halter.png";
import Psico from "../img/Psico.png";
import Nutri from "../img/Nutri.png";
import Tatico from "../img/Tatico.png";
import Bola from "../img/BolaRoxo.png";
import stgen from "../styles/General.module.css";
import React from 'react';
import { Link } from "react-router-dom";
function MenuBottom(props) {
  return (
    <div>
      <div
        className={stgen.Line}
        style={{
          backgroundImage: `url(${Linha})`,
          backgroundRepeat: "no-repeat",
          height: 11
        }}
      ></div>
      <div className={stgen.MenuBottom}>
        <div style={{ borderRadius: "0px 0px 0px 10px" }} >
          <Link to='/treinotela'>
            <button className={stgen.Botao} style={{ borderRadius: 100 }}>
              <img src={Halter} height="35" />
            </button>
          </Link>
        </div>
        <div>
          <Link to='/nutritela'>
            <button
              className={stgen.Botao}
              style={{
                marginBottom: "10px"
              }}
            >
              <img src={Nutri} height="35" />
            </button>
          </Link>
        </div>

        <div style={{ backgroundColor: "white", height:38 }}>
          <Link to='/maintela'>
            <button
              className={stgen.Botao}
              style={{
                marginTop: "-15px",
                borderRadius: "25px",
                backgroundColor: "white"
              }}
            >
              <img src={Bola} height="45" />
            </button>
          </Link>
        </div>

        <div>
          <Link to='/tatictela'>
            <button
              className={stgen.Botao}
              style={{
                marginRight: "15px"
              }}
            >
              <img src={Tatico} height="35" />
            </button>
          </Link>
        </div>
        <div style={{ borderRadius: "0px 0px 10px 0px" }}>
          <Link to='/psicotela'>
            <button className={stgen.Botao}>
              <img src={Psico} height="35" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default MenuBottom;
