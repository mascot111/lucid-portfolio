import { Capabilities } from "@/components/home/Capabilities";
import { ContactCTA } from "@/components/home/ContactCTA";
import { CurrentFocus } from "@/components/home/CurrentFocus";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { Reveal } from "@/components/motion/Reveal";

export default function HomePage() {
  return (
    
    <main>
      <Hero />

      <Reveal amount={0.1}>
        <Intro />
      </Reveal>

      <Reveal amount={0.08}>
        <FeaturedWork />
      </Reveal>

      <Reveal amount={0.1}>
        <CurrentFocus />
      </Reveal>

      <Reveal amount={0.08}>
        <Capabilities />
      </Reveal>

      <Reveal amount={0.12}>
        <ContactCTA />
      </Reveal>
    </main>
  );
}