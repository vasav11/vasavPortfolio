import React from 'react';

const Footer = () => {

   const year = new Date().getFullYear()

  return (
    <footer className='bg-[#12141e] pt-12'>
     {/**----Footer top------- */}
     <div className='container'>
      <div className='sm:flex items-center justify-between md:gap-8'>
        <div className='w-full sm:w-1/2'>
          <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>
            Do you want to make beautiful products?
          </h2>
          <a href="#contact">
                <button
                  className="bg-primaryColor text-white font-[500] flex item-center gap-2
                hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
                >
                  <i className="ri-mail-line"></i> Hire me {/* Change "class" to "className" */}
                </button>
              </a> 
        </div>
        <div className='w-full sm:w-1/2'>
         <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>
         I have developed specialized expertise in web development and
            machine learning, demonstrating proficiency in both Java and Python.
            My strong foundation in React.js has allowed me to deliver impactful
            projects and excel in a rewarding internship focused on dynamic web
            application creation.

         </p>
         <div className='flex items-center gap-4 flex-wrap md:gap-8 mt-10'>
          <span className='text-gray-300 font-[600] text-[15px]'>
            Follow me:
          </span>
          <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer 
          text-center'>
            < a href="https://github.com/vasav11"
            className='text-gray-300 font-[500] text-[18px]'>
              <i class="ri-github-line"></i>
            </a>
          </span>
          <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer 
          text-center'>
            < a href="https://www.linkedin.com/in/vasav-chaudhary-99650a245/"
            className='text-gray-300 font-[500] text-[18px]'>
            <i class="ri-linkedin-box-fill"></i>
            </a>
          </span>
          <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer 
          text-center'>
            < a href="https://www.instagram.com/vasavchaudhary/"
            className='text-gray-300 font-[500] text-[18px]'>
            <i class="ri-instagram-line"></i>
            </a>
          </span>
          <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer 
          text-center'>
            < a href="Twitter"
            className='text-gray-300 font-[500] text-[18px]'>
           <i class="ri-twitter-x-fill"></i>
            </a>
          </span>
          
         </div>
        </div>
      </div>
      <div className="menu">
                    <ul className='flex justify-center gap-5 mt-10'>
                     <li>
                        <a className="text-gray-400 font-[600]" href="#about">
                            About
                        </a>
                      </li> 
                      <li>
                        <a className="text-gray-400 font-[600]" href="#services">
                            Services
                        </a>
                      </li> 
                      <li>
                        <a className="text-gray-400 font-[600]" href="#portfolio">
                            Portfolio
                        </a>
                      </li> 
                      <li>
                        <a className="text-gray-400 font-[600]" href="#contact">
                            Contact
                        </a>
                      </li> 
                    </ul>
                </div>
     </div>
     
     {/**-----Footer end------- */}
     {/**footer bottom */}
     <div className='bg-[#1b1e29] py-5 mt-14'>
      <div className='container'>
        <div className='flex items-center justify-center sm:justify-between'>
          <div className='hidden sm:block'>
            <div className='flex items-center gap-[10px]'>
              <span className='w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center '>
                V
              </span>
              <div className='leading-[20px]'>
                <h2 className='text-gray-200 font-[500] text-[18px]'>
                  Vasav
                  </h2>
                  <p className='text-gray-400 text-[14px] font-[500]'>
                    Peace</p>
              </div>
            </div>
          </div>
          <div>
            <p className='text-gray-400 text-[14px]'>Copyright {year} Developed by vasav - All right reserved</p>
          </div>
        </div>
      </div>
     </div>
     {/**footer bottom end */}
    </footer>
  )
}
export default Footer;
