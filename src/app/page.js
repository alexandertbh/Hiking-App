import Image from "next/image";
import styles from "./page.module.css";
import HikingForm from "@/components/HikingForm";
export default function Home() {
  return (
    <main className={styles.main}>
      <HikingForm />
    </main>
  );
}
