import styles from "../styles/LoginTela.module.css";
import Cadastro from "../img/Cadastro.png";
import MenuTop from "../components/MenuTop";
import DadosCadastro from "../components/DadosCadastro";
import React, { useState } from 'react';
import accounts from "../accounts.js"

function CadastroTela() {
  const [users, setUsers] = useState(accounts)
  const newUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
    accounts.push(user);
  }

  return (
    <div className={styles.BackGround}>
      <MenuTop />
      <div className={styles.Cadastro}>
        <img src={Cadastro} height="45" />
      </div>
      <div className={styles.DadosLogin}>
        <DadosCadastro newUser={newUser} />
      </div>
    </div>
  );
}

export default CadastroTela;
