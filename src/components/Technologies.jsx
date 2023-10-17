import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { FaNode } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import {
  SiChakraui,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiSass,
} from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
// Import Swiper files
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Technologies = () => {


  return (
    <div className="technologies" id="technologies">
      <h1>Technologies</h1>
      <h4>Technologies I used in web apps</h4>
      <Swiper
        spaceBetween={60}
        slidesPerView={3}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3300,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
      >
        <SwiperSlide className="box">
          <SiRedux className="icon" />
          <span>Redux-Toolkit</span>
        </SwiperSlide>
        <SwiperSlide className="box">
          <SiMongodb className="icon" />
          <span>Mongodb</span>
        </SwiperSlide>
        <SwiperSlide className="box">
          <SiExpress className="icon" />
          <span>Express.js</span>
        </SwiperSlide>
        <SwiperSlide className="box">
          <SiChakraui className="icon" />
          <span>Chakra-Ui</span>
        </SwiperSlide>
        <SwiperSlide className="box">
          <BiLogoTailwindCss className="icon" />
          <span>Tailwindcss</span>
        </SwiperSlide>
        <SwiperSlide className="box">
          <RiReactjsLine className="icon" />
          <span>React-js</span>
        </SwiperSlide>
        <SwiperSlide className="box">
          <FaNode className="icon" />
          <span>Node.js</span>
        </SwiperSlide>
        <SwiperSlide className="box">
          <TbBrandJavascript className="icon" />
          <span>JavaScript</span>
        </SwiperSlide>
        <SwiperSlide className="box">
          <BsBootstrapFill className="icon" />
          <span>BootStrap</span>
        </SwiperSlide>
        <SwiperSlide className="box">
          <DiCss3Full className="icon" />
          <span>CSS</span>
        </SwiperSlide>
        <SwiperSlide className="box">
          <AiOutlineHtml5 className="icon" />
          <span>HTML</span>
        </SwiperSlide>
        <SwiperSlide className="box">
          <SiSass className="icon" />
          <span>SCSS</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Technologies;
