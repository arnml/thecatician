import Player from "@/components/Player/Player";
import CatDescription from "@/components/CatDescription/CatDescription";

export default function Home() {
  return (
    <div className="max-w-screen-sm p-2 pt-28 mx-auto space-y-4">        
      <h1 className="text-3xl font-semibold text-gray-900 text-center py-2">
        Entiende papers científicos en 
        <span className="relative m-2">
          <span className="block absolute -inset-1 -skew-y-3 bg-indigo-600" aria-hidden="true"></span>
          <span className="relative text-white">minutos</span>
        </span>
      </h1>
      <CatDescription/> 
      <h2 className="">Free Examples</h2>
      <Player/>
      <Player/>
      <Player/>
      <div className="flex justify-center space-x-4 fixed inset-x-0 bottom-0 p-4">
        <button className="bg-indigo-600 rounded-lg text-white px-4 py-2 animate-bounce">
        Join the Club
        </button>
        <button className="bg-orange-500 rounded-lg text-white px-4 py-2 animate-pulse">
        Free Example
        </button>         
      </div>      
    </div>
  );
}
