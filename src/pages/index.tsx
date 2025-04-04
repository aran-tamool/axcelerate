import Head from "next/head";

import styles from "@/styles/Home.module.css";
import { SearchApp } from "@/components/Templates/SearchApp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Axcelerte search App</title>
        <meta name="description" content="Axcelerte search App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.page} `}>
        <main className={styles.main}>
          <SearchApp />
        </main>
      </div>
    </>
  );
}
