import styles from "../styles/PriTela.module.css";
import stgen from "../styles/General.module.css";
import Futio from "../img/Futio.png";
import Interrogacao from "../img/Interrogacao.png";
import FundoPriTela from "../img/FundoPriTela.jpg";
import Menu from "../img/Menu.png";
import Enter from "../img/Enter.png";
import React from 'react';
import { Link } from "react-router-dom";
function PriTela() {
  var FundoPriTelaSt = {
    backgroundImage: `url(${FundoPriTela})`,
    backgroundRepeat: "no-repeat"
  };
  return (
    <div className={styles.PriTela} style={FundoPriTelaSt}>
      <div className={stgen.MenuTop}>
        <div>
          <button className={stgen.Botao} style={{
            height: 30,
            width: 30,
            marginTop: 8,
            marginLeft: -7
          }}>
            <img src={Menu} style={{ height: 35 }} />
          </button>
        </div>

        <div></div>

        <div>
          <Link to='/helptela'>
            <button className={stgen.Botao} style={{
              height: 35,
              width: 35,
              marginTop: 10,
              marginLeft: 12
            }}>
              <img src={Interrogacao} height="33" width="35"  />
            </button>
          </Link>
        </div>
      </div>

      <div style={{marginLeft:45}}>
        <img src={Futio} width="190px" />
      </div>

      <div style={{marginLeft:16}}>
        <Link to='/logintela'>
          <button className={stgen.Botao} style={{ height: 100, width: 230}}>
            <img src={Enter} width="230px" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PriTela;
