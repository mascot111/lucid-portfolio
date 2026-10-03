import { Capabilities } from "@/components/home/Capabilities";
import { ContactCTA } from "@/components/home/ContactCTA";
import { CurrentFocus } from "@/components/home/CurrentFocus";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Intro />
      <FeaturedWork />
      <CurrentFocus />
      <Capabilities />
      <ContactCTA />
    </main>
  );
}