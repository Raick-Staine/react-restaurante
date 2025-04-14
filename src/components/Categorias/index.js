import styles from "./Categorias.module.css";
import Image from "next/image";

import Entrada from "../../../public/entrada.png";
import Massa from "../../../public/massa.png";
import Carne from "../../../public/carne.png";
import Bebidas from "../../../public/bebidas.png";
import Salada from "../../../public/salada.png";
import Sobremesa from "../../../public/sobremesa.png";

export default function Categorias(props) {
    const handlerSelectedBtn = (category) => {
        props.selectedBtn == category && styles.selectedBtn;
    }

    return (
        <section className={styles.Categories}>
            <button onClick={props.onClickEntradas} className={`${styles.btn} ${handlerSelectedBtn('Entradas')}`}>
                <Image src={Entrada} alt='Prato de entrada' />
                <span>Entradas</span>
            </button>

            <button onClick={props.onClickMassa} className={`${styles.btn} ${handlerSelectedBtn('Massas')}`}>
                <Image src={Massa} alt='Prato de entrada' />
                <span>Massas</span>
            </button>

            <button onClick={props.onClickCarne} className={`${styles.btn} ${handlerSelectedBtn('Carnes')}`}>
                <Image src={Carne} alt='Prato de entrada' />
                <span>Carnes</span>
            </button>

            <button onClick={props.onClickBebidas} className={`${styles.btn} ${handlerSelectedBtn('Bebidas')}`}>
                <Image src={Bebidas} alt='Prato de entrada' />
                <span>Bebidas</span>
            </button>

            <button onClick={props.onClickSalada} className={`${styles.btn} ${handlerSelectedBtn('Saladas')}`}>
                <Image src={Salada} alt='Prato de entrada' />
                <span>Saladas</span>
            </button>

            <button onClick={props.onClickSobremesa} className={`${styles.btn} ${handlerSelectedBtn('Sobremesas')}`}>
                <Image src={Sobremesa} alt='Prato de entrada' />
                <span>Sobremesas</span>
            </button>

        </section>
    )
}