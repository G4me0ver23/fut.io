import styles from "../styles/Psico.module.css";
import PsicoTxt from "../img/PsicoTxt.png";
import MenuBottom from "../components/MenuBottom.js";
import MenuTop from "../components/MenuTop";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
function Psico() {
  const {id}=useParams();
  var idd={id}.id-1;
  const [data, setData]=useState([]);
  console.log(data);
  

  useEffect(() => {
    fetch('http://localhost:3000/static/psicos.json')
      .then((response) => response.json())
      .then(function(data){
        return(data[idd])
      }).then(setData);
  }, []);

  return (
    <div className={styles.BackGround}>
      <MenuTop />

      <div>
        <img src={PsicoTxt} height="40" />
      </div>
      <div className={styles.Psicos}>
          <div className={styles.PsicoCurrent}>
            <img src={data.perfil} height="80px" 
            style={{marginTop: 10, marginLeft:3}} />
            <h2>{data.nome} {data.estrelas}</h2>
            <h5>Fone: {data.fone}</h5>
            <h5>Email: {data.email}</h5>
            <h5>Instagram: {data.insta}</h5><br/>
            <h5>Mais informações:</h5>
            <h5>Joana é uma psicologa formada na faculdade {data.facul} </h5>
            <h5>{data.atendidos} atletas atendidos</h5>
            <h5>Endereço: {data.endereço}</h5>
          </div>
      </div>
      <MenuBottom />
    </div>
  );
}
export default Psico;
