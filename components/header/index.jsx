import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/logoDuplo.svg";
import Styles from "./header.module.scss";
import Button from "../button";

const Header = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.logo}>
        <Image src={Logo} alt="Logo" />
      </div>
      <div className={Styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/servicos">O que fazemos</Link>
        <Link href="/contato">Contato</Link>
      </div>
      <div className={Styles.actions}>
        <Button title="Fale conosco" />
      </div>
    </div>
  );
};

export default Header;
