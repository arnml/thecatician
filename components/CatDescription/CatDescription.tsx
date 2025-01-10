import Image from "next/image";
import oldCat from "@/public/oldCat.png";
export default function CatDescription(){
    return(
        <figure className="flex bg-indigo-300 rounded-xl p-6">
            <Image className="w-16 h-16 rounded-full mx-auto" src={oldCat} alt=""/>
            <div className="flex flex-col justify-center items-center text-center space-y-4">
                <blockquote className="space-y-2">
                    <p className="text-lg font-medium sm:hidden">
                        <span className="font-bold pl-1">AI/ML</span>, 
                        <span className="font-bold pl-1">Systems</span>, 
                        <span className="font-bold pl-1">Physics</span>, and
                        <span className="font-bold pl-1">Math</span>                    
                    </p>
                    <p className="text-lg font-medium hidden sm:block">
                    Writing about
                        <span className="font-bold pl-1">AI/ML</span>, 
                        <span className="font-bold pl-1">Systems</span>, 
                        <span className="font-bold pl-1">Physics</span>, and
                        <span className="font-bold pl-1">Math</span>          
                    —a blend of artisanal craftsmanship and AI-assisted research.          
                    </p>
                    
                </blockquote>
            </div>
        </figure>
    );
}