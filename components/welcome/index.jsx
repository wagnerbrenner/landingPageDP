import Button from "../button";
import Styles from "./welcome.module.scss";

const Welcome = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.text}>
        <h1>Seja bem vindo ao Duplo Infinito</h1>
        <p>
          Um lugar onde você pode encontrar tudo o que precisa para o seu
          negócio
        </p>
        <Button title="Aumentar vendas" kind="secondary" />
      </div>
      <div className={Styles.image}></div>
    </div>
  );
};

export default Welcome;
