import Abgrenzung from "@/components/Abgrenzung";
import Ablauf from "@/components/Ablauf";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Kontakt from "@/components/Kontakt";
import Pillars from "@/components/Pillars";
import Testimonials from "@/components/Testimonials";
import UeberMich from "@/components/UeberMich";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pillars />
        <Abgrenzung />
        <Ablauf />
        <Testimonials />
        <UeberMich />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
