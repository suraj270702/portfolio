import React from "react";
import java from '../assets/java.svg'
import mysql from '../assets/mysql-3.svg'
import nodejsicon from '../assets/nodejs-icon.svg'

const About = () => {
  return (
    <>
      <div className=" w-full md:w-[820px] h-full md:h-[700px] rounded-[20px] bg-white shadow-sm md:px-10 px-4 md:py-6 py-2">
        <div className="">
          <div className="flex items-center gap-4">
            <span className="text-[20px] md:text-[40px] font-[500] leading-[20px] md:leading-[40px] text-[#0B0909]">
              About me
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="254"
              height="4"
              viewBox="0 0 254 4"
              fill="none"
            >
              <path
                d="M1 1L253 3"
                stroke="url(#paint0_linear_33_72)"
                stroke-width="2"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_33_72"
                  x1="127"
                  y1="1"
                  x2="127"
                  y2="3"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FE9119" />
                  <stop offset="1" stop-color="#ED250A" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="mt-3 md:mt-6">
            <h4 className="text-[#000] text-[16px] font-[500] leading-[30px] ">
              Hello there! I'm thrilled to welcome you to my portfolio. I am a
              passionate and versatile full-stack developer with a keen interest
              in exploring the latest cutting-edge technologies. My journey in
              the world of web development has been nothing short of
              exhilarating, and I constantly strive to enhance my skills and
              embrace emerging trends in the industry.
            </h4>
          </div>
          <div className="mt-3 md:mt-6">
            <span className=" text-[#000] text-[20px] md:text-[34px] font-[500] leading-[30px] ">
              What I do!
            </span>
          </div>
          <div className="mt-3 md:mt-6 grid grid-cols-1 md:grid-cols-2   gap-4 ">
            <div className="w-full md:min-w-[333px] md:max-w[333px] h-full md:h-[169px] rounded-[20px] bg-[#FFEBD1] p-2 md:px-4 md:py-4">
              <div>
                <div className="flex gap-3 items-center">
                  <div className="w-[24px] h-[24px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.8881 3L14.8481 3.4L11.1081 21L9.14812 20.6L12.8881 3ZM19.5881 12L15.9981 8.41V5.58L22.4181 12L15.9981 18.41V15.58L19.5881 12ZM1.57812 12L7.99813 5.58V8.41L4.40812 12L7.99813 15.58V18.41L1.57812 12Z"
                        fill="#E80505"
                      />
                    </svg>
                  </div>
                  <span className="text-[20px] md:text-[24px] font-[600] leading-[20px]">
                    Web Development
                  </span>
                </div>
                <div className="mt-2">
                  <h4 className="text-[#000] text-[14px] leading-[20px] font-[400] tracking-wide">
                    As a developer, I find myself most captivated by the power
                    and flexibility of NEXT.js. I'm always eager to dive into
                    new projects that leverage NEXT.js and discover innovative
                    ways to create fast, scalable, and user-friendly
                    applications.
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-full md:min-w-[333px] md:max-w[333px] h-full md:h-[169px] rounded-[20px] bg-[#F2F7FC] p-2 md:px-4 md:py-2">
              <div>
                <div className="flex gap-3 items-center">
                  <div className="w-[34px] h-[34px]">
                    <img src={java} alt="" className="img" />
                  </div>
                  <span className="text-[20px] md:text-[24px] font-[600] leading-[20px]">
                    Java Development
                  </span>
                </div>
                <div className="mt-2">
                  <h4 className="text-[#000] text-[14px] leading-[20px] font-[400] tracking-wide">
                    With a focus on user-centric design and cutting-edge
                    technologies, I thrive on building intuitive and efficient
                    apps that make a positive impact on people's lives. Let's
                    turn ideas into reality and shape the future together.
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-full md:min-w-[333px] md:max-w[333px] h-[169px] rounded-[20px] bg-[#F2F7FC] p-2 md:px-4 md:py-2">
              <div>
                <div className="flex gap-3 items-center">
                  <div className="w-[34px] h-[34px]">
                    <img src={mysql} alt="" className="img" />
                  </div>
                  <span className="text-[20px] md:text-[24px] font-[600] leading-[20px]">
                    Mysql Development
                  </span>
                </div>
                <div className="mt-2">
                  <h4 className="text-[#000] text-[14px] leading-[20px] font-[400] tracking-wide">
                    In MySQL development, my focus revolves around user-centric
                    design methodologies coupled with the integration of
                    leading-edge technologies. I specialize in crafting
                    streamlined and efficient database solutions.
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-full md:min-w-[333px] md:max-w[333px] h-[169px] rounded-[20px] bg-[#FFEBD1] p-2 md:px-4 md:py-2">
              <div>
                <div className="flex gap-3 items-center">
                  <div className="w-[34px] h-[34px]">
                    <img src={nodejsicon} alt="" className="img" />
                  </div>
                  <span className="text-[20px] md:text-[24px] font-[600] leading-[20px]">
                    Nodejs Development
                  </span>
                </div>
                <div className="mt-2">
                  <h4 className="text-[#000] text-[14px] leading-[20px] font-[400] tracking-wide">
                    Embracing Node.js development, I'm driven by user-centric
                    design principles and the integration of pioneering
                    technologies. My forte lies in creating instinctive and
                    high-performing applications.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
