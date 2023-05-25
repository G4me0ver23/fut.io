import styles from "../styles/Nutri.module.css";
import stgen from "../styles/General.module.css";
import NutriTxt from "../img/NutriTxt.png";
import Seta from "../img/Seta.png";
import MenuBottom from "../components/MenuBottom.js";
import MenuTop from "../components/MenuTop";
import React, { useEffect, useRef, useState } from 'react';

function Dieta(){
    const [data, setData]=useState([]);
    const Nutris = useRef(null);
    const idd=0;
    console.log(data)
    useEffect(() => {
        fetch('http://localhost:3000/static/nutris.json')
          .then((response) => response.json())
          .then(function(data){
            return(data[idd]["dieta"])
          })
          .then(setData);
      }, []);

      const handleLeftClick = (e) =>{
        e.preventDefault();
        Nutris.current.scrollLeft-=Nutris.current.offsetWidth;
      }
    
      const handleRightClick = (e) =>{
        Nutris.current.scrollLeft+=Nutris.current.offsetWidth;
      }

    return(
        <div className={styles.BackGroundDiet}>
            <MenuTop />
            <div>
                <img src={NutriTxt} height="40" />
            </div>
            <div className={styles.Nutris} ref={Nutris}>
                {data.map((item) => {const {nome,alimentos,image}=item;
                return(
                    <div className={styles.Nutri}>
                        <img src={image} width="100%" />
                        <h4>{nome}:</h4>
                        <ul>
                            <li>{alimentos[0]}</li>
                            <li>{alimentos[1]}</li>
                            <li>{alimentos[2]}</li>
                            <li>{alimentos[3]}</li>
                        </ul>
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
    )
}

export default Dieta;