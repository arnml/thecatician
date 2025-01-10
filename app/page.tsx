import HeroSimple from "@/components/HeroSimple";
import Player from "@/components/Player/Player";
import CatDescription from "@/components/CatDescription/CatDescription";

export default function Home() {
  return (
    <>
      <HeroSimple/>
      <div className="max-w-screen-sm p-2 mx-auto ">
        <CatDescription/>        
        <Player/>
      </div>
    </>
  );
}
