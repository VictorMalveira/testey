import React from 'react';
import styles from './cases.module.scss'; // Importa o módulo de estilo
import Menu from '../header/Index'

const Register = () => {
  return (
    <>
    <Menu />
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Cadastro</h1>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">Nome</label>
          <input className={styles.input} type="text" id="name" name="name" />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input className={styles.input} type="email" id="email" name="email" />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">Senha</label>
          <input className={styles.input} type="password" id="password" name="password" />
        </div>
        <button className={styles.button} type="submit">Cadastrar</button>
      </form>
    </div>
    </>
  );
};

export default Register;
