export default function HeroSection() {
    return (
      <>
        {/* Hero */}
        <div className="max-w-[85rem] mx-auto pt-6 px-4 sm:px-6 lg:px-8">
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div>
              <h1 className="block text-5xl font-bold text-gray-800 sm:text-5xl lg:text-6xl lg:leading-tight dark:text-white">
              <span className="text-[#ff0] ">El Explorador:</span> Entiende papers científicos en <span className="text-orange-500">minutos</span>
              </h1>
              <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
              El Explorador es un boletín y pódcast diario, escrito a mano con esmero y atención al detalle, entregado cada mañana en formato de texto y audio. No sufras más intentando entender complicadas ecuaciones solo. ¡Estamos juntos! </p>
  
              {/* Buttons */}
              <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                <a
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Únete al club
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </a>
                <a
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="#"
                >
                  Mira los ejemplos
                </a>
              </div>
              {/* End Buttons */}

            </div>  
            <div className="relative ms-4">
              <img
                className="w-full rounded-md"
                src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=600&q=80"
                alt="Hero Image"
              />
              <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>
  
              {/* SVG */}
              <div className="absolute bottom-0 start-0">
                <svg
                  className="w-2/3 ms-auto h-auto text-white dark:text-neutral-900"
                  width="630"
                  height="451"
                  viewBox="0 0 630 451"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="531" y="352" width="99" height="99" fill="currentColor" />
                  {/* Add remaining rects as required */}
                </svg>
              </div>
              {/* End SVG */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Hero */}
      </>
    );
  }
  