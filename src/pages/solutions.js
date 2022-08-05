import SolutionsSwiper from "../components/solutions/solutions-swiper"

const features = [
    { name: 'Desarrollo', description: 'Diseñaremos y construiremos un sistema de puntuación personalizado con el conjunto de datos de la organización.' },
    { name: 'Implementación', description: 'Fácil y rápido. Tu equipo solo debe de desarrollar una API que nos envíe determinados datos y les retornaremos la predicción.' },
    { name: 'Hosting', description: 'Nosotros nos encargamos del hosting de los sistemas de puntuación. Tu organización solo debe de aprovecharlos!' },
    { name: 'Pago', description: 'Contrata una suscripción anual y paga de forma mensual.' },
    { name: 'Promociones', description: 'Cuentas con un mes gratis para probar cualquiera de nuestros sistemas de puntuación. Además, si trabajas con el Sistema Besterp, la implementación es gratuita.' },
    { name: 'Consideraciones', description: 'El desarrollo y la implementación son servicios que se pagan de forma separada y por una única vez.' },
]

export default function Solutions() {
    return (
        <div className="bg-white" id="soluciones">
            <div className="max-w-2xl mx-auto pt-20 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                <div>
                    {/* <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-700 relative inline-block mx-2"> */}
                    <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r before:from-blue-800 before:via-blue-600 before:to-blue-400 relative inline-block mx-2">
                        <span class="relative text-white"><h2 className="text-4xl font-bold font-mono text-">soluciones.</h2></span>
                    </span>

                    <p className="mt-4 text-black font-montserrat text-lg">
                        Nuestros sistemas de puntuación han sido desarrollados utilizando técnicas estadísticas y de machine learning
                        de vanguardia con la finalidad de brindar fundamento estadístico y tecnológico a las decisiones de las 
                        instituciones financieras.
                    </p>

                    <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-6 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4 font-montserrat">
                                <dt className="font-bold text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                {/* <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8"> */}
                <div className="flex overflow-hidden">
                    <SolutionsSwiper />
                </div>
            </div>
        </div>
    )
}