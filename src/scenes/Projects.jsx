import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import project1 from "../assets/project-1.jpeg";
import project2 from "../assets/project-2.jpeg";
import project3 from "../assets/project-3.jpeg";
import project4 from "../assets/project-4.jpeg";
import MediaCard from "../cards/projectsaup";
import MediaCard2 from "../cards/projecthau";
import MediaCard3 from "../cards/projectldm";
import MediaCard4 from "../cards/projectport";


const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-full mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-red">PRO</span>JECTS
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <LineGradient width="w-1/3" />
        </div>
        <p className="mt-10 mb-10">
          I would love to demonstrate my potential by using my skills to create
          innovative and high-quality web applications. I am eager to learn and
          grow as a web developer while working on challenging projects and
          collaborating with other professionals in the industry.
        </p>

        {/* PROJECTS */}
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div class="swiper">
            <div class="portfolio_container container swiper-container">
              <div class="swiper-wrapper">
                <SwiperSlide>
                  <MediaCard />
                </SwiperSlide>

                <SwiperSlide>
                  <MediaCard2 />
                </SwiperSlide>

                <SwiperSlide>
                  <MediaCard3 />
                </SwiperSlide>

                <SwiperSlide>
                  <MediaCard4 />
                </SwiperSlide>
              </div>
            </div>
          </div>
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Projects;
