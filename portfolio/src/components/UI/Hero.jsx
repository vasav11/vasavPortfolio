import React from "react";
import heroImg from "../../assests/images/hero.jpg";
import CountUp from "react-countup";
const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container justify-center px-40rem pt-14"> {/* Change justify-center to justify-start */}
        <div className="md:flex items-center justify-start sm:flex-col md:flex-row px-30">
          {/*Hero left content* */}
          <div className="w-full md:basis-1/2 justify-center ml-0 md:ml-10"> {/* Add ml-0 and md:ml-10 to adjust the left margin */}
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[20px] justify-center "
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[2rem] sm:text-[46px] mt-5 "
            >
              I'm Vasav Chaudhary
              <br />
              Software Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button
                  className="bg-primaryColor text-white font-[500] flex item-center gap-2
                hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
                >
                  <i className="ri-mail-line"></i> Hire me {/* Change "class" to "className" */}
                </button>
              </a>
              <a
                className="text-smallTextColor font-[16px] border-b border-solid
              border-smallTextColor"
                href="#portfolio"
              >
                See Portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-heading mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i className="ri-apps-line"></i> {/* Change "class" to "className" */}
              </span>
              I am a fourth-year computer science student at Kalinga Institute
              of Industrial Technology. With a strong ardor for coding and a
              keen interest in innovation, I have developed a specialization in
              web development and machine learning, excelling in both Java and
              Python programming languages.
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow me:
              </span>
              <span>
                <a
                  href="#youtube"
                  className="text-smallTextColor text-[25px] font-[600]"
                >
                  <i className="ri-youtube-line"></i> {/* Change "class" to "className" */}
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/vasav11"
                  className="text-smallTextColor text-[25px] font-[600]"
                >
                  <i className="ri-github-fill"></i> {/* Change "class" to "className" */}
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/vasav-chaudhary-99650a245/"
                  className="text-smallTextColor text-[25px] font-[600]"
                >
                  <i className="ri-linkedin-box-fill"></i> {/* Change "class" to "className" */}
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/vasavchaudhary/"
                  className="text-smallTextColor text-[25px] font-[600]"
                >
                  <i className="ri-instagram-fill"></i> {/* Change "class" to "className" */}
                </a>
              </span>
            </div>
          </div>
          {/**hero left end */}
          {/*hero img* */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure 
            className="flex items-center justify-center">
              <img src={heroImg} alt="" />
            </figure>
          </div>
          {/** hero img end */}
          {/*hero content right* */}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-1 md:mt-0
          md:flex-col md:justify-end md:text-end ml-auto pl-auto">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={4} duration={2} suffix="th"/>

              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Year<br/> 
                
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%"/>

              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Sucess rate
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={10} duration={2} suffix="+"/>

              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Projects 
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={441} duration={2} suffix="+"/>

              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
               Linkedin 
              </h4>
            </div>
          </div>
          {/*hero content right end* */}
        </div>
      </div>
    </section>
  );
  };  
  export default Hero;