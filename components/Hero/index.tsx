import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
        
      >
        <div className="absolute top-0 -bottom-full left-0 z-[-1] opacity-30 lg:opacity-100">
          <img src="/images/hero/image.jpg" height='100%'/>
          
        </div>
        <div className="container">
        
          <div className="-mx-4 flex flex-wrap">
            
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                STAINLESS STEEL PROCESS
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-white dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                {/* Soudage et installation de tuyauterie sanitaire en acier inoxydable       */}
                Nous comprenons parfaitement que dans votre industrie, le temps c'est vraiment de l'argent. En fournissant des équipes de terrain bien formées, expérimentées et entièrement équipées, nous pouvons vous aider à installer, modifier ou réparer rapidement des systèmes, afin que vous puissiez être opérationnel avec un minimum de temps d'arrêt.
                          </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/support"
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Contactez-nous
                  </Link>
                  <Link
                    href="tel:+212-667-052349"
                    className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                  >
                    Appeler maintenant
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
      </section>
    </>
  );
};

export default Hero;
