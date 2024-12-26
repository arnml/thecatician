export default function Features() {
    return(
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base/7 font-semibold text-indigo-600">
                    Simplifica tu aprendizaje
                </h2>
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                    Todo lo que necesitas para entender papers científicos
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                    Descubre el conocimiento clave de papers científicos en minutos, sin complicaciones. Información clara, directa y al alcance de todos.
                </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    <div className="relative pl-16">
                    <dt className="text-base/7 font-semibold text-gray-900">
                        <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                        </div>
                        Tópicos que cubrimos
                    </dt>
                    <dd className="mt-2 text-base/7 text-gray-600">                          
                        <span className="p-0 text-indigo-600">Inteligencia Artificial,</span>
                        <span className="p-1 text-black">Machine Learning,</span>
                        <span className="p-1 text-indigo-600">Diseño de Sistemas,</span>
                        <span className="p-1 text-black">Física,</span>
                        <span className="p-1 text-indigo-600">Matemática</span>
                    </dd>
                    </div>
                    <div className="relative pl-16">
                    <dt className="text-base/7 font-semibold text-gray-900">
                        <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                        </svg>
                        </div>
                        Entendible para todos
                    </dt>
                    <dd className="mt-2 text-base/7 text-gray-600">
                        Transformamos terminología compleja en ideas claras y simples para facilitar tu aprendizaje.
                    </dd>
                    </div>
                    <div className="relative pl-16">
                    <dt className="text-base/7 font-semibold text-gray-900">
                        <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                        </svg>
                        </div>
                        Formato accesible
                    </dt>
                    <dd className="mt-2 text-base/7 text-gray-600">
                        Disponible en texto y audio, elige cómo prefieres consumir la información.
                    </dd>
                    </div>
                    
                </dl>
                </div>
            </div>
        </div>

    );
}