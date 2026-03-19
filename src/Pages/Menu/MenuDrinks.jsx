import { useEffect } from "react";
import { Link } from "react-router-dom";
import DrinksComponents from "./MenuDrinksComponent";
import styles from "./MenuDrinks.module.scss";

const MenuDrinks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Menu</h2>
      </header>

      {/* Lunch、Drinkで使い回すため、中身をコンポーネント化 */}
      <DrinksComponents />
      <div className={styles.backToMenuArea}>
        <Link to="/menu" className={styles.backLink}>
          {"メニュートップに戻る".split("").map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
              {char}
            </span>
          ))}
        </Link>
      </div>
    </div>
  );
};

export default MenuDrinks;
