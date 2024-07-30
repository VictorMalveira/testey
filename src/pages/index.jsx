import Menu from "./components/header/Index";
import { Inter } from "next/font/google";
import Welcome from "./components/welcome/Index";
import HeroSection from "./components/navbar/Index";
import Footer from "./components/footer/Index";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Menu/>
      
      
      <HeroSection />
      <Footer />
    </div>
  );
}
