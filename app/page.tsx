import About from "@/components/About";
import Hero from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import Programs from "@/components/Programs";
import Trainers from "@/components/Trainers";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <Programs />
      <About />
      <Trainers />
    </main>
  );
}
