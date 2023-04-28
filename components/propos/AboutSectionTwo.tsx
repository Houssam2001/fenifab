import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about2.jpg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Installation de tuyauterie de qualité supérieure
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Nos techniciens de terrain sont formés pour installer tout type de tuyauterie avec précision et qualité supérieure,
                 en utilisant des matériaux de la meilleure qualité pour garantir une durabilité et une sécurité maximales.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Matériaux variés pour une flexibilité accrue
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                En cas de fuite, de bris ou de tout autre problème avec votre tuyauterie, 
                notre équipe de techniciens de terrain est disponible pour les réparations et la maintenance afin de minimiser les temps d'arrêt et garantir une performance optimale.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Techniciens expérimentés pour une installation fiable et professionnelle
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Nos techniciens de terrain peuvent offrir des conseils d'experts pour vous aider à choisir le bon type de tuyauterie pour votre application,
                 ainsi que des solutions de conception et d'installation personnalisées pour répondre à vos besoins spécifiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
