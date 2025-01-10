import Image from "next/image";
import oldCat from "@/public/oldCat.png";
export default function CatDescription(){
    return(
        <figure className="bg-slate-100 rounded-xl p-6">
            <Image className="w-24 h-24 rounded-full mx-auto" src={oldCat} alt="" width="384" height="512"/>
            <div className="md:p-8 text-center space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                    Writing about 
                    <span className="font-bold text-indigo-600 pl-1">AI/ML</span>, 
                    <span className="font-bold text-gray-900 pl-1">Systems</span>, 
                    <span className="font-bold text-indigo-600 pl-1">Physics</span>, and
                    <span className="font-bold text-gray-900 px-1">Math</span>
                    blend of artisanal craftsmanship and AI-assisted research.
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="font-bold text-indigo-600">
                        The team
                    </div>
                </figcaption>
            </div>
        </figure>
    );
}