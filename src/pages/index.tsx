import Menu from "./components/header/Menu"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Menu/>
    </main>
  );
}
