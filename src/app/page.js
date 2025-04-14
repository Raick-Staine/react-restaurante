'use client';
import styles from "./page.module.css";
import Categorias from "@/components/Categorias";
import { useState } from "react";

export default function Home() {

  const [btnClicked, setBtnCliked] = useState('Entradas');

  const handleFilter = (category) => {
    setBtnCliked(category)
  }

  return (
    <div className={styles.container}>

      <section className={styles.banner}></section>

      <main className={styles.main}>
        <Categorias onClickEntradas={() => handleFilter('Entradas')} selectedBTn={btnClicked} />
      </main>
      
    </div>
  );
}