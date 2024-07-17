import Menu from "./components/header/Index";
import { Inter } from "next/font/google";
import Welcome from "./components/welcome/Index";
import Carousel from "./components/carroucel/Index"


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Menu/>
      <Welcome />
      <Carousel />
      
    </div>
  );
}
