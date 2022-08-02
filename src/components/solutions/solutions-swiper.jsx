import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/effect-coverflow"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../../styles/Solutions-swiper.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";
import SolutionCard from "./solution-card";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const solutions = [
  { id: '1', name: 'Profit Scoring', description: 'Predice la rentabilidad de las solicitudes de crédito.', imageUri: 'https://objectstorage.sa-santiago-1.oraclecloud.com/n/ax8tyev2rnkq/b/bucket-webpages-objects/o/img-profit-scoring.svg' },
  { id: '2', name: 'Credit Scoring', description: 'Permite hayar la probabilidad de impago (default) de un crédito.', imageUri: 'https://objectstorage.sa-santiago-1.oraclecloud.com/n/ax8tyev2rnkq/b/bucket-webpages-objects/o/img-credit-scoring.svg' },
  { id: '3', name: 'Collecting Scoring', description: 'Permite determinar la probabilidad de realizar el cobro exitoso de un crédito.', imageUri: 'https://objectstorage.sa-santiago-1.oraclecloud.com/n/ax8tyev2rnkq/b/bucket-webpages-objects/o/img-collecting-scoring.svg' },
  { id: '4', name: 'Churn Scoring', description: 'Permite identificar a los socios / clientes que dejarán de consumir los servicios de una organización.', imageUri: 'https://source.unsplash.com/random/300x300/?2' },
]


export default function SolutionsSwiper() {
  return (
    <div className="container">
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
        {solutions.map((solution) => (
        <SwiperSlide>
            <SolutionCard id={solution.id} name={solution.name} description={solution.description} imageUri={solution.imageUri}/>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}