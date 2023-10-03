import React from "react";
import frontendImg from '../../assests/images/front-end.png';
import backendImg from '../../assests/images/backend.png';
import uiImg from '../../assests/images/design.png';
import appsImg from '../../assests/images/apps.png';

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5 ">
            What I DO
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor  font-[500] text-[20px] leading-7">
            I have developed specialized expertise in web development and
            machine learning, demonstrating proficiency in both Java and Python.
            My strong foundation in React.js has allowed me to deliver impactful
            projects and excel in a rewarding internship focused on dynamic web
            application creation.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/** vertical line running through the middle */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>
              {/**left card */}
              <div className="mt-5 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded
                            shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Frontend Development
                        </h3>
                        <p
                          className="text-[15px] text-smallTextColor group-hover:text-white
                              group-hover:font-[500] leading-7"
                        >
                          I have special interest in Frontend Development and
                          it's my personal favourite Beacuse I think it's
                          magical and give good user experience
                        </p>
                      </div>
                    </div>
                  </div>
                 <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                 left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                 justify-center">
                    <figure>
                        <img src={frontendImg} alt=""/>
                    </figure>
                 </div>
                </div>
              </div>
              {/**right card */}
              <div className="mt-5 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay='50'
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded
                            shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Backend Development
                        </h3>
                        <p
                          className="text-[15px] text-smallTextColor group-hover:text-white
                              group-hover:font-[500] leading-7"
                        >
                          I have worked many databases like mongoDB
                          and DBMS and succesfully connected my Frontend
                          to my databases 
                        </p>
                      </div>
                    </div>
                  </div>
                 <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                 left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                 justify-center">
                    <figure>
                        <img src={backendImg} alt=""/>
                    </figure>
                 </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1400"
                        className="bg-white p-4 rounded
                            shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Machine Learning
                        </h3>
                        <p
                          className="text-[15px] text-smallTextColor group-hover:text-white
                              group-hover:font-[500] leading-7"
                        >
                          I have got keen interset in machine Learning in 
                          Chronic kedney Diseases predictor through Python
                          and also my current project is going on this
                        </p>
                      </div>
                    </div>
                  </div>
                 <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                 left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                 justify-center">
                    <figure>
                        <img src={uiImg} alt=""/>
                    </figure>
                 </div>
                </div>
              </div>
              {/**right card */}
              <div className="mt-5 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        className="bg-white p-4 rounded
                            shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          JAVA
                        </h3>
                        <p
                          className="text-[15px] text-smallTextColor group-hover:text-white
                              group-hover:font-[500] leading-7"
                        >
                         My major problem solving langauage is Java
                          also done a certification course in by udemy and 
                          solved more than 100+ problems on leetcode in JAVA.
                        </p>
                      </div>
                    </div>
                  </div>
                 <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                 left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                 justify-center">
                    <figure>
                        <img src={appsImg} alt=""/>
                    </figure>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
