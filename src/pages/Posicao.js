import styles from "../styles/Posicao.module.css";
import stgen from "../styles/General.module.css";
import MenuBottom from "../components/MenuBottom.js";
import MenuTop from "../components/MenuTop";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
function Posicao() {
  const {id}=useParams();
  var idd={id}.id-1;
  const [data, setData]=useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/static/posicoes.json')
      .then((response) => response.json())
      .then(function(data){
        return(data[idd])
      })
        .then(setData);
  }, []);
  console.log(data)

  return (
    <div className={styles.BackGround}>
      <MenuTop />

      <div>
        <span>{data.posicao}</span>
      </div>
      <div>
        <h1>Função</h1>
        <div className={styles.Posicao}>
          <button className={stgen.Botao}>
            <img src={data.imgperfil} width="100%" />
            <h4>{data.funcao}</h4>
          </button>
        </div>
      </div>
      <MenuBottom />
    </div>
  );
}
export default Posicao;
