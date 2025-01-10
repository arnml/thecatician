import HeroSimple from "@/components/HeroSimple";
import Player from "@/components/Player/Player";

export default function Home() {
  return (
    <>
      <HeroSimple/>
      <div className="max-w-screen-sm p-2 mx-auto gap-32">
        <Player/>
        <Player/>
        <Player/>
      </div>
    </>
  );
}
