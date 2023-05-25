import styles from "../styles/PsicoTela.module.css";
import stgen from "../styles/General.module.css";
import Psico from "../img/PsicoTxt.png";
import Seta from "../img/Seta.png";
import MenuBottom from "../components/MenuBottom.js";
import MenuTop from "../components/MenuTop";
import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
function PsicoTela() {
  const [data, setData]=useState([]);
  const Psicos = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/static/psicos.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) =>{
    e.preventDefault();
    Psicos.current.scrollLeft-=Psicos.current.offsetWidth;
  }

  const handleRightClick = (e) =>{
    Psicos.current.scrollLeft+=Psicos.current.offsetWidth;
  }
  return (
    <div className={styles.BackGround}>
      <MenuTop />

      <div>
        <img src={Psico} height="40" />
      </div>

      <div className={styles.Psicos} ref={Psicos}>
        {data.map((item) => {const {image,link}=item;
        return(
          <div className={styles.PsicoCurrent} style={{ marginTop: 80 }}>
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
export default PsicoTela;
