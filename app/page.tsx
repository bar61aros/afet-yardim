import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Bitirme Projesi Frontend</h1>
        <p>This is the initial setup for the project.</p>
      </main>
    </div>
  );
}
