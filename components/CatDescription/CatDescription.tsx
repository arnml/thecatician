import Image from "next/image";
import oldCat from "@/public/oldCat.png";
export default function CatDescription(){
    return(
        <figure className="bg-indigo-300 rounded-xl p-6">
            <Image className="w-24 h-24 rounded-full mx-auto" src={oldCat} alt="" width="384" height="512"/>
            <div className="text-center space-y-4">
                <blockquote className="space-y-2">
                    <p className="text-lg font-medium">
                        <span className="font-bold text-indigo-600 pl-1">AI/ML</span>, 
                        <span className="font-bold text-indigo-600 pl-1">Systems</span>, 
                        <span className="font-bold text-indigo-600 pl-1">Physics</span>, and
                        <span className="font-bold text-indigo-600 pl-1">Math</span>                    
                    </p>
                    {/* <p className="text-lg font-medium">
                        A blend of artisanal craftsmanship and AI-assisted research.
                    </p> */}
                </blockquote>
                {/* <button className="bg-sky-500 hover:bg-sky-700 rounded-lg text-white px-4 py-2">
                Join the Club
                </button>
                <button className="bg-sky-500 hover:bg-sky-700 rounded-lg text-white px-4 py-2">
                Free Example
                </button> */}
            </div>
        </figure>
    );
}