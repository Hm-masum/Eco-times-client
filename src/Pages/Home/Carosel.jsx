import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
import useAxiosCommon from '../../Hooks/useAxiosCommon';
import { useQuery } from '@tanstack/react-query';


export default function Carosel() {
  const axiosCommon=useAxiosCommon()


  const { data: articles = [] } = useQuery({
    queryKey: ["articles-slider"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/article`);
      return data;
    },
  });
  


  return (
    <div className='container py-5 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide image={articles[0]?.image}  text={articles[0]?.title}></Slide></SwiperSlide>
        <SwiperSlide><Slide image={articles[1]?.image}  text={articles[1]?.title}></Slide></SwiperSlide>
        <SwiperSlide><Slide image={articles[2]?.image}  text={articles[2]?.title}></Slide></SwiperSlide>
      </Swiper>
    </div>
  );
}

