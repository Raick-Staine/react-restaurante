'use client';
import styles from "./page.module.css";
import Categorias from "@/components/Categorias";
import { useState } from "react";
import Search from "@/components/Search";
import Card from "@/components/Card";
import { filterProducts, searchProducts } from "@/Service";


export default function Home() {

  const [btnClicked, setBtnCliked] = useState('Entradas');
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(filterProducts('Entradas'));

  const handleFilter = (category) => {
    setList(filterProducts(category));
    setBtnCliked(category);
    setSearchText('');
  }

  const handleSearch = (typedText) => {
    setSearchText(typedText);
    if (typedText.length > 2) {
      setList(searchProducts(typedText));
    }
  }

  return (
    <div className={styles.container}>

      <section className={styles.banner}></section>

      <main className={styles.main}>

        <Categorias
          onClickEntradas={() => handleFilter('Entradas')}
          onClickMassas={() => handleFilter('Massas')}
          onClickCarnes={() => handleFilter('Carnes')}
          onClickBebidas={() => handleFilter('Bebidas')}
          onClickSaladas={() => handleFilter('Saladas')}
          onClickSobremesas={() => handleFilter('Sobremesas')}
          selectedBtn={btnClicked} />

        <Search onChange={(event) => handleSearch(event.target.value)}
          value={searchText} />

        <section className={styles.foodMenu}>
          <h2>Cardápio</h2>
          <div className={styles.cards}>
            {list.map((product) => (
              <Card
                key={product.id}
                name={product.name}
                image={product.image}
                category={product.category}
                description={product.description}
                price={product.price}
                length={list.length}
              />
            ))}
          </div>
        </section>
      </main>

    </div>
  );
}