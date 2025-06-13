import HeroSectionOne from "@/components/hero-section-demo-1";
import ModeToggle from "@/components/theme-switch";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
    <ModeToggle />
    <Button>Hi</Button>
    <HeroSectionOne />
    </>
  );
}
