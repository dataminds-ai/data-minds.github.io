import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function SlideNextButton({ name }) {
  const swiper = useSwiper();

  return (
    <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={() => swiper.slideNext()}>
        {name}
    </button>
  );
}