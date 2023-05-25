import styles from "../styles/MainTela.module.css";
import stgen from "../styles/General.module.css";
import FutioBlack from "../img/FutioBlack.png";
import FundoMainTela from "../img/FundoMainTela.png";
import TreinoDia from "../img/TreinoDia.png";
import Almoço from "../img/Almoço.png";
import Metas from "../img/Metas.png";
import MenuBottom from "../components/MenuBottom.js";
import MenuTop from "../components/MenuTop";
import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";

function MainTela(){
    return(
        <div className={styles.BackGround} style={{backgroundImage: `url(${FundoMainTela})`,backgroundRepeat: "no-repeat"}}>
            <MenuTop />

            <div>
                <img src={FutioBlack} height="82" />
            </div>

            <div className={styles.MeioTela}>
                <div className={styles.Left}>
                    <Link to="/treinotela">
                        <button className={stgen.Botao}>
                            <img src={TreinoDia} height="100px" width="152px" />
                        </button>
                    </Link>
                </div>
                <div className={styles.Center}>
                    <Link to="/nutritela">
                        <button className={stgen.Botao}>
                            <img src={Almoço} height="100px" width="152px" />
                        </button>
                    </Link>    
                </div>
                <div className={styles.Right}>
                    <Link to="/nutritela">
                        <button className={stgen.Botao}>
                            <img src={Metas} height="100px" width="152px" />
                        </button>
                    </Link>
                </div>
            </div>
            <MenuBottom />
        </div>
    )
}

export default MainTela;