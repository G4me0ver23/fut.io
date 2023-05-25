import styles from "../styles/Nutri.module.css";
import NutriTxt from "../img/NutriTxt.png";
import MenuBottom from "../components/MenuBottom.js";
import MenuTop from "../components/MenuTop";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function MetasMedidas () {
    const [data, setData]=useState([]);
    const {id}=useParams();
    var idd={id}.id-1
    console.log(idd)
    console.log(data)
    useEffect(() => {
        fetch('http://localhost:3000/static/nutris.json')
          .then((response) => response.json())
          .then(function(data){
            return(data[idd])
          })
          .then(setData);
      }, []);
    return(
        <div className={styles.BackGroundOther}>
            <MenuTop />
            <div>
                <img src={NutriTxt} height="40" />
            </div>
            <div className={styles.Nutris}>
                <div className={styles.Nutri}>
                    <h2>{data.nome}</h2><br/>
                    <h3>Peso:</h3>
                    {data.peso==null ? (<input type="text"></input>):(<h3>{data.peso}</h3>)}<br/>
                    <h3>Altura:</h3>
                    {data.altura==null ? (<input type="text"></input>):(<h3>{data.altura}</h3>)}<br/>
                    <h3>Imc:</h3>
                    <h3>{data.peso/data.altura**2}</h3><br/>
                    <h3>Gordura:</h3>
                    {data.gordura==null ? (<input type="text"></input>):(<h3>{data.gordura}</h3>)}<br/>
                </div>
            </div>
            <MenuBottom />
        </div>
    )
}

export default MetasMedidas;