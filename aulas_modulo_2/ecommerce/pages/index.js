import styles from "../styles/Home.module.css"
import Link from "next/link"
import Head from "next/head"
import styled from "styled-components"

const HeaderMessage = styled.div`
  background-color: blanchedalmond;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  font-size: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
`

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>eCommerce</title>
        <link rel="icon" href="/favicon.icon" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bem-vindo ao nosso eCommerce</h1>
        <h2>
          <Link href="/list">
            <a>Lista de produtos</a>
          </Link>
        </h2>
      </main>

      <footer className={styles.footer}>
        <HeaderMessage>
          <span>eCommerce</span>
          <span>Compre aqui tudo o que precisa</span>
          <span>Criado por Boanerges Junior</span>
        </HeaderMessage>
      </footer>
    </div>
  )
}
