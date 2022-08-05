import "../../styles/methodology.css"

const features = [
  { name: '1. Recolección', description: 'Se recolectan los datos de la organización.' },
  { name: '2. Preprocesamiento', description: 'Se aplican técnicas de codificación, normalización, imputación, entre otras; para asegurar la calidad de los datos.' },
  { name: '3. Selección', description: 'Se seleccionan a las variables más significativas del modelo formado con los datos recolectados y el algoritmo.' },
  { name: '4. Optimización', description: 'Se identifican los valores de los hiperparámetros del modelo que, en conjunto, producen el mejor desempeño.' },
  { name: '5. Construcción', description: 'Se construye el modelo final utilizando a las variables más significativas y a los hiperparámetros óptimos para luego ser entrenado con los datos.' },
  { name: '6. Evaluación', description: 'Se evalúa el desempeño del modelo final utilizando una porción de los datos como prueba.' },
]

export default function Methodology() {
  return (
    <div className="bg-white" id="metodologia">
      <div className="max-w-2xl mx-auto pt-20 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div className="flex overflow-hidden">
          <div>
            <img src="https://objectstorage.sa-santiago-1.oraclecloud.com/n/ax8tyev2rnkq/b/bucket-webpages-objects/o/img-data-report.svg" alt="" className="object-fill object-center bg-white rounded-t-lg w-auto h-full p-5" class="flip-horizontally" />
          </div>
        </div>
        <div>
          <div className="text-right">
            <span class="before:block before:absolute before:-inset-1 before:-skew-y--3 before:bg-gradient-to-r before:from-blue-400 before:via-blue-600 before:to-blue-800 relative inline-block mx-2">
              <span class="relative text-white"><h2 className="text-4xl font-bold font-mono text-">.metodología</h2></span>
            </span>

            <p className="mt-4 text-black font-montserrat text-lg">
              Nuestra metodología se fundamenta en el Estado del Arte.
            </p>
          </div>
          <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-6 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4 font-montserrat">
                <dt className="font-bold text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}