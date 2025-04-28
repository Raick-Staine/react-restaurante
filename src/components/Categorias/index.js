import styles from "./Categorias.module.css";
import Image from "next/image";

import Entradas from "../../../public/entrada.png";
import Massas from "../../../public/massa.png";
import Carnes from "../../../public/carne.png";
import Bebidas from "../../../public/bebidas.png";
import Saladas from "../../../public/salada.png";
import Sobremesas from "../../../public/sobremesa.png";

export default function Categorias(props) {
    const handleSelectedBtn = (category) => props.selectedBtn == category && styles.selectedBtn;
    
    return (
        <section className={styles.categories}>
            <button onClick={props.onClickEntradas} className={`${styles.btn} ${handleSelectedBtn('Entradas')}`}>
                <Image src={Entradas} alt='Prato de entrada' />
                <span>Entradas</span>
            </button>

            <button onClick={props.onClickMassas} className={`${styles.btn} ${handleSelectedBtn('Massas')}`}>
                <Image src={Massas} alt='Prato de entrada' />
                <span>Massas</span>
            </button>

            <button onClick={props.onClickCarnes} className={`${styles.btn} ${handleSelectedBtn('Carnes')}`}>
                <Image src={Carnes} alt='Prato de entrada' />
                <span>Carnes</span>
            </button>

            <button onClick={props.onClickBebidas} className={`${styles.btn} ${handleSelectedBtn('Bebidas')}`}>
                <Image src={Bebidas} alt='Prato de entrada' />
                <span>Bebidas</span>
            </button>

            <button onClick={props.onClickSaladas} className={`${styles.btn} ${handleSelectedBtn('Saladas')}`}>
                <Image src={Saladas} alt='Prato de entrada' />
                <span>Saladas</span>
            </button>

            <button onClick={props.onClickSobremesas} className={`${styles.btn} ${handleSelectedBtn('Sobremesas')}`}>
                <Image src={Sobremesas} alt='Prato de entrada' />
                <span>Sobremesas</span>
            </button>

        </section>
    )
}