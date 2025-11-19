import Hero from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import Programs from "@/components/Programs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <Programs />
    </main>
  );
}
