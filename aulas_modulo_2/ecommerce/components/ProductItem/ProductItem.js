import Link from "next/link"
import styles from "../../styles/ProductItem.module.css"

export default function ProductItem({ id, name, price, lastPrice }) {
  const link = "/details/" + id

  return (
    <div className={styles.productContainer}>
      <div className={styles.productDescription}>
        <span>{name}</span>
        <span>{price}</span>
        <span>{lastPrice}</span>
      </div>
      <div>
        <Link href={link}>
          <a>Detalhes</a>
        </Link>
      </div>
    </div>
  )
}
