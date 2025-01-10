import Player from "@/components/Player/Player";
import CatDescription from "@/components/CatDescription/CatDescription";

export default function Home() {
  return (
    <>
      {/* <HeroSimple/> */}
      <div className="max-w-screen-sm p-2 pt-20 mx-auto space-y-4">
        <h1 className="text-3xl font-semibold text-gray-900 text-center">
          Entiende papers científicos en 
          <span className="relative m-2">
            <span className="block absolute -inset-1 -skew-y-3 bg-indigo-600" aria-hidden="true"></span>
            <span className="relative text-white">minutos</span>
          </span>
        </h1>
        <CatDescription/>        
        <Player/>
      </div>
    </>
  );
}
