import styles from "../styles/TreinoTela.module.css";
import stgen from "../styles/General.module.css";
import Fisico from "../img/Fisico.png";
import Seta from "../img/Seta.png";
import MenuBottom from "../components/MenuBottom.js";
import MenuTop from "../components/MenuTop";
import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
function TreinoTela() {
  const [data, setData]=useState([]);
  const Treinos = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/static/treinos.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) =>{
    e.preventDefault();
    Treinos.current.scrollLeft-=Treinos.current.offsetWidth;
  }

  const handleRightClick = (e) =>{
    Treinos.current.scrollLeft+=Treinos.current.offsetWidth;
  }
  return (
    <div className={styles.BackGround}>
      <MenuTop />

      <div>
        <img src={Fisico} height="40" />
      </div>

      <div className={styles.Treinos} ref={Treinos}>
        {data.map((item) => {const {image,link}=item;
        return(
          <div className={styles.Treino} style={{ marginTop: 90 }}>
            <Link to={link} >
              <button className={stgen.Botao} >
                <img src={image} height="100%" />
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

export default TreinoTela;
