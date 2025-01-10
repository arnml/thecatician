export default function Player(){
    return(
        <>
        <div>
        <div className="bg-indigo-300 border-slate-100 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
        <div className="flex items-center space-x-4">
            <div className="min-w-0 flex-auto space-y-1 font-semibold">
            <p className="text-indigo-600 text-sm leading-6">
                <abbr title="Episode">Ep.</abbr> 128
            </p>
            <h2 className="text-slate-500 text-sm leading-6 truncate">
                Scaling CSS at Heroku with Utility classNamees
            </h2>
            <p className="text-slate-900 text-lg">
                Full Stack Radio
            </p>
            </div>
        </div>
        <div className="space-y-2">
            <div className="relative">
            <div className="bg-slate-100 rounded-full overflow-hidden">
                <div className="bg-indigo-600 w-1/2 h-2" role="progressbar" aria-label="music progress" aria-valuenow={1456} aria-valuemin={0} aria-valuemax={4550}></div>
            </div>
            <div className="ring-cyan-500 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow">
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full ring-1 ring-inset ring-slate-900/5"></div>
            </div>
            </div>
            <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
            <div className="text-indigo-600">24:16</div>
            <div className="text-slate-500">75:50</div>
            </div>
        </div>
        </div>
        <div className="bg-indigo-200 text-slate-800 rounded-b-xl flex items-center">
            <button type="button" className="bg-white text-slate-900 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center" aria-label="Pause">
                <svg width="30" height="32" fill="currentColor">
                <rect x="6" y="4" width="4" height="24" rx="2" />
                <rect x="20" y="4" width="4" height="24" rx="2" />
                </svg>
            </button>        
        </div>
        </div>
    </>
    );
}