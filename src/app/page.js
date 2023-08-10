import Image from "next/image";
import styles from "./page.module.css";
import UserForm from "@/components/userForm";
import hikesAPI from "../utils/api/hikes"
import Button from "@/components/testButton";
export default function Home() {

  

  return (
    <main className={styles.main}>
      <UserForm />
      <Button />
    </main>
  );
}
