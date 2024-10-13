import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import { Link, useFetchers } from "react-router-dom";

export default function Carosel() {
  const axiosCommon = useAxiosCommon();

  const { data: articles = [] } = useQuery({
    queryKey: ["articles-slider"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/article-trending`);
      return data;
    },
  });

  return (
    <div className="container py-5 mx-auto">
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
        {articles.map((article) => (
          <SwiperSlide key={article?.id}>
            <div
              className="w-full h-[70vh] md:h-[80vh]"
              style={{
                backgroundImage: `url(${article?.image})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
              }}
            >
              <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
                <div className="text-center w-[70%] mx-auto">
                  <h1 className="text-3xl font-semibold text-white lg:text-5xl">
                    {article?.title}
                  </h1>
                  <br />
                  <Link
                    to={"/subscription"}
                    className="bg-purple-700 font-semibold rounded-md text-center px-5 py-3 text-white"
                  >
                    Subscribe
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
