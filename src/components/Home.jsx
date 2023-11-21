import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import profile from "../assets/profile.jpeg";
import facebook from "../assets/facebook.svg";
import java from '../assets/java.svg'
import mysql from '../assets/mysql-3.svg'
import nodejsicon from '../assets/nodejs-icon.svg'
const Home = () => {
  const [active,setActive] = useState([true,false,false,false])
  const handleUpdate =(index)=>{
    let copy = [...active]
    for(let i=0;i<copy.length;i++){
     if(index === i){
      copy[index] = !copy[index]
     }
     else{
      copy[i]=false
     }
    }
    
    setActive(copy)
  }

  

  return (
    <>
      <div className=" md:py-20 md:px-28 px-4 pt-4">
        <div className="flex flex-col md:flex-row gap-5 mt-10">
          <div className=" w-full md:min-w-[400px] h-[700px] rounded-[20px] bg-white shadow-sm ">
            <div className="">
              <div className="mx-[125px] md:mx-[100px] md:-mt-[100px] -mt-[50px]">
                <img
                  src={profile}
                  alt="profile"
                  className="md:w-[200px] md:h-[200px] w-[150px] h-[150px] rounded-[20px]"
                />
              </div>
              <h1 className="text-[#0B0909] text-[20px] md:text-[28px] leading-[35px] font-bold text-center mt-4">
                Suraj Maurya
              </h1>
              <p className="text-[rgba(11,9,9,0.50)] text-[16px] leading-[40px] mt-4 text-center font-[500]">
                Frontend Developer
              </p>
              <div className="w-[94%] flex gap-[8px] mt-6 md:mx-12 ml-[7%]">
                <NavLink to="">
                  <div className="py-[20px] px-[28px] rounded-[8px] bg-[#F2F7FC] w-[70px] h-[60px]">
                    <svg
                      width="12"
                      height="21"
                      viewBox="0 0 12 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Vector"
                        d="M7.75027 12.0825H10.2308L11.2231 8.11357H7.75027V6.12912C7.75027 5.10712 7.75027 4.14467 9.73472 4.14467H11.2231V0.810787C10.8996 0.768121 9.67816 0.671875 8.38827 0.671875C5.69438 0.671875 3.78137 2.31599 3.78137 5.33534V8.11357H0.804688V12.0825H3.78137V20.5164H7.75027V12.0825Z"
                        fill="#1877F2"
                      />
                    </svg>
                  </div>
                </NavLink>
                <NavLink to="">
                  <div className="py-[20px] px-[28px] rounded-[8px] bg-[#F2F7FC] w-[70px] h-[60px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M3.88945 1.80688C3.88923 2.24547 3.71479 2.66601 3.40451 2.97599C3.09422 3.28596 2.67351 3.45998 2.23491 3.45976C1.79632 3.45954 1.37578 3.2851 1.06581 2.97482C0.755831 2.66453 0.581812 2.24382 0.582031 1.80523C0.582251 1.36664 0.756691 0.946095 1.06698 0.63612C1.37726 0.326144 1.79798 0.152125 2.23657 0.152344C2.67516 0.152563 3.0957 0.327003 3.40568 0.637289C3.71565 0.947575 3.88967 1.36829 3.88945 1.80688ZM3.93906 4.68434H0.631643V15.0366H3.93906V4.68434ZM9.16479 4.68434H5.8739V15.0366H9.13171V9.60412C9.13171 6.57783 13.0758 6.2967 13.0758 9.60412V15.0366H16.3419V8.4796C16.3419 3.3779 10.5043 3.56808 9.13171 6.07345L9.16479 4.68434Z"
                        fill="#0077B5"
                      />
                    </svg>
                  </div>
                </NavLink>
                <NavLink to="">
                  <div className="py-[20px] px-[28px] rounded-[8px] bg-[#F2F7FC] w-[70px] h-[60px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      viewBox="0 0 17 15"
                      fill="none"
                    >
                      <path
                        d="M16.9874 2.60531C16.3564 2.88446 15.6873 3.06783 15.0021 3.14938C15.724 2.71705 16.2642 2.03705 16.5219 1.23604C15.8439 1.63954 15.1005 1.92233 14.3266 2.0753C13.8062 1.51848 13.1164 1.14919 12.3644 1.02485C11.6125 0.900507 10.8405 1.02808 10.1686 1.38773C9.49661 1.74738 8.96229 2.31896 8.64869 3.01361C8.33508 3.70825 8.25976 4.48705 8.43444 5.22892C7.05932 5.16012 5.71406 4.80287 4.48599 4.18036C3.25792 3.55785 2.17451 2.684 1.30612 1.61557C0.998769 2.14347 0.837256 2.74358 0.83812 3.35444C0.83812 4.55338 1.44917 5.61258 2.37607 6.23272C1.82705 6.21541 1.29012 6.06714 0.810007 5.80028V5.84245C0.809982 6.64108 1.0862 7.41515 1.59182 8.03334C2.09744 8.65154 2.80133 9.07582 3.5841 9.23421C3.07447 9.37247 2.54003 9.39283 2.02135 9.29374C2.24206 9.98118 2.67226 10.5824 3.25171 11.0131C3.83115 11.4438 4.53082 11.6825 5.2527 11.6958C4.53528 12.2592 3.71383 12.6757 2.83531 12.9215C1.9568 13.1672 1.03846 13.2373 0.132812 13.1279C1.71353 14.1444 3.5536 14.6841 5.43295 14.6824C11.7948 14.6824 15.2725 9.41281 15.2725 4.84278C15.2725 4.69395 15.2692 4.54346 15.2626 4.39545C15.9393 3.90625 16.5234 3.29951 16.9874 2.60531Z"
                        fill="#1DA1F2"
                      />
                    </svg>
                  </div>
                </NavLink>
                <NavLink to="https://github.com/suraj270702">
                  <div className="py-[20px] px-[28px] rounded-[8px] bg-[#F2F7FC] hover:bg-[#669ed7] w-[70px] h-[60px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M8.27246 0.326172C3.70408 0.326172 0.00390761 4.02635 0.00390761 8.59472C0.00291203 10.3304 0.548473 12.0224 1.5632 13.4305C2.57793 14.8387 4.01029 15.8916 5.65711 16.4399C6.07054 16.5119 6.22599 16.2638 6.22599 16.0463C6.22599 15.8504 6.21524 15.1996 6.21524 14.5067C4.13818 14.8896 3.60073 14.0007 3.43536 13.5352C3.34192 13.297 2.93924 12.5636 2.58783 12.3668C2.29843 12.2122 1.885 11.8294 2.57708 11.8195C3.22864 11.8087 3.69333 12.4189 3.84878 12.667C4.59295 13.9172 5.78114 13.5658 6.25658 13.3491C6.32935 12.8117 6.54598 12.4503 6.78412 12.2436C4.94437 12.0369 3.02193 11.3233 3.02193 8.16062C3.02193 7.261 3.34192 6.51766 3.86945 5.93804C3.78677 5.73132 3.49737 4.8838 3.95214 3.74687C3.95214 3.74687 4.64422 3.53023 6.22599 4.59522C6.8991 4.4084 7.59457 4.31438 8.29313 4.31575C8.99596 4.31575 9.69878 4.40835 10.3603 4.5944C11.942 3.51949 12.6341 3.7477 12.6341 3.7477C13.0889 4.88462 12.7995 5.73215 12.7168 5.93886C13.2435 6.51766 13.5643 7.25108 13.5643 8.16062C13.5643 11.3341 11.632 12.0369 9.79139 12.2436C10.0915 12.5016 10.3503 12.9977 10.3503 13.7733C10.3503 14.8788 10.3396 15.7677 10.3396 16.0472C10.3396 16.2638 10.495 16.5218 10.9085 16.4391C12.5496 15.8848 13.9757 14.8298 14.9859 13.4227C15.9962 12.0155 16.5398 10.327 16.5402 8.59472C16.5402 4.02635 12.84 0.326172 8.27163 0.326172H8.27246Z"
                        fill="#0B0909"
                      />
                    </svg>
                  </div>
                </NavLink>
              </div>
              <div className="w-[94%] md:min-w-[350px] h-[350px] rounded-[20px] bg-[#F2F5F9] md:mx-auto mt-6 ml-[3%] pl-5 pt-4 md:pl-10 md:pt-6">
                <div className="flex flex-col items-start">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-[20px] h-[12px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="21"
                        viewBox="0 0 12 21"
                        fill="none"
                      >
                        <path
                          d="M10 0.5H2C1.46957 0.5 0.960859 0.710714 0.585786 1.08579C0.210714 1.46086 0 1.96957 0 2.5V18.5C0 19.0304 0.210714 19.5391 0.585786 19.9142C0.960859 20.2893 1.46957 20.5 2 20.5H10C10.5304 20.5 11.0391 20.2893 11.4142 19.9142C11.7893 19.5391 12 19.0304 12 18.5V2.5C12 1.96957 11.7893 1.46086 11.4142 1.08579C11.0391 0.710714 10.5304 0.5 10 0.5ZM7 19.5H5V18.5H7V19.5ZM10 17.5H2V3.5H10V17.5Z"
                          fill="url(#paint0_linear_27_10)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_27_10"
                            x1="6"
                            y1="0.5"
                            x2="6"
                            y2="20.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#FF9A1A" />
                            <stop offset="1" stop-color="#EC1C09" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[rgba(26,16,3,0.5)] text-[14px] font-[600]">
                        Phone
                      </h4>
                      <h4 className="text-[#000] text-[15px] font-[600] leading-[20px]">
                        +918369930667
                      </h4>
                    </div>
                  </div>
                  <hr className="w-[256px] h-[1px] bg-[#E3E3E3] my-6 "></hr>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-[20px] h-[12px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M0.969999 5.65L10 0L19.03 5.65C19.61 6 20 6.63 20 7.36V17.36C20 18.46 19.1 19.36 18 19.36H2C0.9 19.36 0 18.46 0 17.36V7.36C0 6.63 0.389999 6 0.969999 5.65ZM2 17.36H18V9.36L10 14.36L2 9.36V17.36ZM10 12.36L18 7.36L10 2.36L2 7.36L10 12.36Z"
                          fill="#FF9C1B"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[rgba(26,16,3,0.5)] text-[14px] font-[600]">
                        Email
                      </h4>
                      <h4 className="text-[#000] text-[15px] font-[600] leading-[20px]">
                        surajmaurya2720@gmail.com
                      </h4>
                    </div>
                  </div>
                  <hr className="w-[256px] h-[1px] bg-[#E3E3E3] my-6 "></hr>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-[20px] h-[12px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="22"
                        viewBox="0 0 16 22"
                        fill="none"
                      >
                        <path
                          d="M8.25 1C11.9766 1 15 3.87766 15 7.42188C15 11.5 10.5 17.9627 8.84766 20.1948C8.77907 20.2891 8.68917 20.3657 8.58531 20.4186C8.48144 20.4715 8.36655 20.499 8.25 20.499C8.13345 20.499 8.01856 20.4715 7.91469 20.4186C7.81083 20.3657 7.72093 20.2891 7.65234 20.1948C6 17.9636 1.5 11.5033 1.5 7.42188C1.5 3.87766 4.52344 1 8.25 1Z"
                          stroke="#E80505"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[rgba(26,16,3,0.5)] text-[14px] font-[600]">
                        Location
                      </h4>
                      <h4 className="text-[#000] text-[15px] font-[600] leading-[20px]">
                        Mumbai,India
                      </h4>
                    </div>
                  </div>
                  <hr className="w-[256px] h-[1px] bg-[#E3E3E3] my-6 "></hr>
                  <button className="btn inline-flex gap-[10px] min-w-[185px] h-[44px] px-[20px] py-[10px] ml-[15%] text-[#F2F7FC] text-[12px] font-[600] leading-[20px] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z"
                        fill="#F2F7FC"
                      />
                    </svg>
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:min-w-[820px] w-full">
            <div className="md:flex md:items-end">
              <div className="w-full md:max-w-[500px] h-[100px] bg-[#F2F7FC] border border-solid border-gray-300 rounded-[20px] md:-mt-[150px] mt-8 md:ml-[300px] mb-2 p-[10px]">
                <div className="flex gap-5 md:gap-10 md:ml-2">
                  <NavLink to="/" className="w-full" onClick={()=>handleUpdate(0)}>
                    <div className={`w-full md:w-[80px] h-[80px] rounded-[20px] ${active[0] ? "bg" : "bg-[#E1E8EF]"} flex justify-center items-center`}>
                      <div className="flex flex-col items-center">
                        <div className="w-[24px] h-[24px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                          >
                            <path
                              d="M12.959 1.6601C12.8259 1.55635 12.662 1.5 12.4932 1.5C12.3245 1.5 12.1606 1.55635 12.0275 1.6601L1.25 10.0639L2.18225 11.2429L3.5 10.2154V19.4996C3.50079 19.8972 3.65908 20.2783 3.94022 20.5594C4.22135 20.8405 4.60242 20.9988 5 20.9996H20C20.3976 20.9988 20.7787 20.8405 21.0598 20.5594C21.3409 20.2783 21.4992 19.8972 21.5 19.4996V10.2221L22.8177 11.2496L23.75 10.0706L12.959 1.6601ZM14 19.4996H11V13.4996H14V19.4996ZM15.5 19.4996V13.4996C15.4996 13.1019 15.3414 12.7206 15.0602 12.4394C14.779 12.1582 14.3977 12 14 11.9996H11C10.6023 12 10.221 12.1582 9.93978 12.4394C9.65856 12.7206 9.5004 13.1019 9.5 13.4996V19.4996H5V9.0461L12.5 3.2036L20 9.0536V19.4996H15.5Z"
                              fill="#F2F7FC"
                            />
                          </svg>
                        </div>
                        <h4 className={`text-[12px] ${active[0] ? "text-white" : 'text-[#000]'}  font-semibold leading-[20px]`}>
                          Home
                        </h4>
                      </div>
                    </div>
                  </NavLink>
                  <NavLink to="/resume" className="w-full" onClick={()=>handleUpdate(1)}>
                    <div className={`w-full md:w-[80px] h-[80px] rounded-[20px] ${active[1] ? "bg" : "bg-[#E1E8EF]"} flex justify-center items-center`}>
                      <div className="flex flex-col items-center">
                        <div className="w-[24px] h-[24px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                          >
                            <path
                              d="M7.5 2H17.5C18.2956 2 19.0587 2.31607 19.6213 2.87868C20.1839 3.44129 20.5 4.20435 20.5 5V19C20.5 19.7956 20.1839 20.5587 19.6213 21.1213C19.0587 21.6839 18.2956 22 17.5 22H7.5C6.70435 22 5.94129 21.6839 5.37868 21.1213C4.81607 20.5587 4.5 19.7956 4.5 19V5C4.5 4.20435 4.81607 3.44129 5.37868 2.87868C5.94129 2.31607 6.70435 2 7.5 2ZM7.5 4C7.23478 4 6.98043 4.10536 6.79289 4.29289C6.60536 4.48043 6.5 4.73478 6.5 5V19C6.5 19.2652 6.60536 19.5196 6.79289 19.7071C6.98043 19.8946 7.23478 20 7.5 20H17.5C17.7652 20 18.0196 19.8946 18.2071 19.7071C18.3946 19.5196 18.5 19.2652 18.5 19V5C18.5 4.73478 18.3946 4.48043 18.2071 4.29289C18.0196 4.10536 17.7652 4 17.5 4H7.5ZM9.5 5H15.5C15.7652 5 16.0196 5.10536 16.2071 5.29289C16.3946 5.48043 16.5 5.73478 16.5 6C16.5 6.26522 16.3946 6.51957 16.2071 6.70711C16.0196 6.89464 15.7652 7 15.5 7H9.5C9.23478 7 8.98043 6.89464 8.79289 6.70711C8.60536 6.51957 8.5 6.26522 8.5 6C8.5 5.73478 8.60536 5.48043 8.79289 5.29289C8.98043 5.10536 9.23478 5 9.5 5ZM9.5 17H11.5C11.7652 17 12.0196 17.1054 12.2071 17.2929C12.3946 17.4804 12.5 17.7348 12.5 18C12.5 18.2652 12.3946 18.5196 12.2071 18.7071C12.0196 18.8946 11.7652 19 11.5 19H9.5C9.23478 19 8.98043 18.8946 8.79289 18.7071C8.60536 18.5196 8.5 18.2652 8.5 18C8.5 17.7348 8.60536 17.4804 8.79289 17.2929C8.98043 17.1054 9.23478 17 9.5 17ZM9.5 13H15.5C15.7652 13 16.0196 13.1054 16.2071 13.2929C16.3946 13.4804 16.5 13.7348 16.5 14C16.5 14.2652 16.3946 14.5196 16.2071 14.7071C16.0196 14.8946 15.7652 15 15.5 15H9.5C9.23478 15 8.98043 14.8946 8.79289 14.7071C8.60536 14.5196 8.5 14.2652 8.5 14C8.5 13.7348 8.60536 13.4804 8.79289 13.2929C8.98043 13.1054 9.23478 13 9.5 13ZM9.5 9H15.5C15.7652 9 16.0196 9.10536 16.2071 9.29289C16.3946 9.48043 16.5 9.73478 16.5 10C16.5 10.2652 16.3946 10.5196 16.2071 10.7071C16.0196 10.8946 15.7652 11 15.5 11H9.5C9.23478 11 8.98043 10.8946 8.79289 10.7071C8.60536 10.5196 8.5 10.2652 8.5 10C8.5 9.73478 8.60536 9.48043 8.79289 9.29289C8.98043 9.10536 9.23478 9 9.5 9Z"
                              fill="#1A1003"
                              fill-opacity="0.5"
                            />
                          </svg>
                        </div>
                        <h4 className={`text-[12px] ${active[1] ? "text-white" : 'text-[#000]'}  font-semibold leading-[20px]`}>
                          Resume
                        </h4>
                      </div>
                    </div>
                  </NavLink>
                  <NavLink to="/" className="w-full" onClick={()=>handleUpdate(2)}>
                    <div className={`w-full md:w-[80px] h-[80px] rounded-[20px] ${active[2] ? "bg" : "bg-[#E1E8EF]"} flex justify-center items-center`}>
                      <div className="flex flex-col items-center">
                        <div className="w-[24px] h-[24px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                          >
                            <path
                              d="M4.5 21C3.95 21 3.479 20.804 3.087 20.412C2.695 20.02 2.49934 19.5493 2.5 19V8C2.5 7.45 2.696 6.979 3.088 6.587C3.48 6.195 3.95067 5.99934 4.5 6H8.5V4C8.5 3.45 8.696 2.979 9.088 2.587C9.48 2.195 9.95067 1.99934 10.5 2H14.5C15.05 2 15.521 2.196 15.913 2.588C16.305 2.98 16.5007 3.45067 16.5 4V6H20.5C21.05 6 21.521 6.196 21.913 6.588C22.305 6.98 22.5007 7.45067 22.5 8V19C22.5 19.55 22.304 20.021 21.912 20.413C21.52 20.805 21.0493 21.0007 20.5 21H4.5ZM4.5 19H20.5V8H4.5V19ZM10.5 6H14.5V4H10.5V6Z"
                              fill="#1A1003"
                              fill-opacity="0.5"
                            />
                          </svg>
                        </div>
                        <h4 className={`text-[12px] ${active[2] ? "text-white" : 'text-[#000]'}  font-semibold leading-[20px]`}>
                          Work
                        </h4>
                      </div>
                    </div>
                  </NavLink>
                  <NavLink to="/" className="w-full " onClick={()=>handleUpdate(3)}>
                    <div className={`w-full md:w-[80px] h-[80px] rounded-[20px] ${active[3] ? "bg" : "bg-[#E1E8EF]"} flex justify-center items-center`}>
                      <div className="flex flex-col items-center">
                        <div className="w-[24px] h-[24px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                          >
                            <path
                              d="M21.5 2H6.5C5.96957 2 5.46086 2.21071 5.08579 2.58579C4.71071 2.96086 4.5 3.46957 4.5 4V7H2.5V9H4.5V11H2.5V13H4.5V15H2.5V17H4.5V20C4.5 20.5304 4.71071 21.0391 5.08579 21.4142C5.46086 21.7893 5.96957 22 6.5 22H21.5C21.7652 22 22.0196 21.8946 22.2071 21.7071C22.3946 21.5196 22.5 21.2652 22.5 21V3C22.5 2.73478 22.3946 2.48043 22.2071 2.29289C22.0196 2.10536 21.7652 2 21.5 2ZM13.5 4.999C15.148 4.999 16.5 6.35 16.5 7.999C16.4971 8.79385 16.1801 9.55533 15.6182 10.1175C15.0562 10.6796 14.2948 10.9968 13.5 11C11.853 11 10.5 9.647 10.5 7.999C10.5 6.35 11.853 4.999 13.5 4.999ZM19.5 18H7.5V17.25C7.5 15.031 10.205 12.75 13.5 12.75C16.795 12.75 19.5 15.031 19.5 17.25V18Z"
                              fill="#1A1003"
                              fill-opacity="0.5"
                            />
                          </svg>
                        </div>
                        <h4 className={`text-[12px] ${active[3] ? "text-white" : 'text-[#000]'}  font-semibold leading-[20px]`}>
                          Contact
                        </h4>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>

            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
