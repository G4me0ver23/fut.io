import styles from "../styles/TaticTela.module.css";
import stgen from "../styles/General.module.css";
import Tatic from "../img/TaticTxt.png";
import Seta from "../img/Seta.png";
import MenuBottom from "../components/MenuBottom.js";
import MenuTop from "../components/MenuTop";
import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
function TaticTela() {
  const [data, setData]=useState([]);
  const Posicoes = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/static/posicoes.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) =>{
    e.preventDefault();
    Posicoes.current.scrollLeft-=Posicoes.current.offsetWidth;
  }

  const handleRightClick = (e) =>{
    Posicoes.current.scrollLeft+=Posicoes.current.offsetWidth;
  }
  return (
    <div className={styles.BackGround}>
      <MenuTop />

      <div>
        <img src={Tatic} height="40" />
      </div>

      <div className={styles.Posicoes} ref={Posicoes}>
        {data.map((item) => {const {image,link}=item;
        return(
          <div className={styles.Posicao} style={{ marginTop: 90 }}>
            <Link to={link} >
              <button className={stgen.Botao}>
                <img src={image} width="100%" />
              </button>
            </Link>
          </div>
        );
        })}
      </div>
      <div className={stgen.Setas}>
        <button onClick={handleLeftClick} className={stgen.Botao} style={{ height: 28, width: 32 }}>
          <img src={Seta} height="100%" />
        </button>
        <button onClick={handleRightClick} className={stgen.Botao} style={{ height: 28, width: 32 }}>
          <img src={Seta} height="100%" />
        </button>
      </div>
      <MenuBottom />
    </div>
  );
}
export default TaticTela;
