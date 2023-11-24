import React, { useState } from "react";
import cricket from "../assets/allaboutcricket.png";
import dsa from "../assets/dsanavigator.png";
import fashion from "../assets/fashiondestination.png";
import bill from "../assets/bill.jpg";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Portfolio = () => {
  const [category, setCategory] = useState([
    {
      name: "All",
      active: true,
    },
    {
      name: "Java",
      active: false,
    },
    {
      name: "Web Development",
      active: false,
    },
    {
      name: "Nodejs",
      active: false,
    },
    {
      name: "SQl",
      active: false,
    },
  ]);

  const [categoryData, setCategoryData] = useState("All");

  const handleCategory = (index) => {
    const copy = [...category];
    for (let i = 0; i < copy.length; i++) {
      if (index === i) {
        copy[index].active = true;
      } else {
        copy[i].active = false;
      }
    }
    setCategory(copy);
    setCategoryData(category[index].name);
  };

  const projects = [
    {
      name: "Fashion Destination",
      category: ["Web Development", "Nodejs", "All"],
      link: "https://fashiondestinationecommerceapp.netlify.app/",
      img: fashion,
    },
    {
      name: "DSA Navigator",
      category: ["Web Development", "All"],
      link: "https://dsanavigator.netlify.app/",
      img: dsa,
    },
    {
      name: "AllAboutCricket",
      category: ["Web Development", "All"],
      link: "https://allaboutcricket.netlify.app/",
      img: cricket,
    },

    {
      name: "Billing App",
      category: ["Java", "SQL", "All"],
      link: "https://github.com/",
      img: bill,
    },
  ];

  const [filterData, setFilterData] = useState(projects);

  const filterProjectData = (data, category) => {
    return data.filter(
      (item) =>
        item.category &&
        item.category.some(
          (cat) => cat.toLowerCase() === category.toLowerCase()
        )
    );
  };

  useEffect(() => {
    const filteredData = filterProjectData(projects, categoryData);
  setFilterData(filteredData);
  }, [ categoryData]);
  return (
    <>
      <div className="w-full md:w-[820px] md:h-[700px] h-full px-4 md:px-10 md:py-6 py-4 bg-[#FFF] rounded-[20px] shadow-sm ">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-[#0B0909] text-[20px] md:text-[40px] leading-[20px] md:leading-[40px] font-[500] ">
              Portfolio
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
                stroke="url(#paint0_linear_104_331)"
                stroke-width="2"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_104_331"
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
          <div className="mt-4 md:ml-[200px]">
            <div className="w-full md:w-[500px] flex justify-between flex-wrap">
              {category.map((item, i) => (
                <span
                  onClick={() => handleCategory(i)}
                  key={i}
                  className={`${
                    item.active ? "text-[#FA5252]" : "text-[#57657A]"
                  } text-[12px] md:text-[16px] font-[500] px-3 py-3 hover:bg-gray-100 cursor-pointer`}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            {filterData.map((project, i) => (
              <NavLink to={project.link}>
                <div className="w-full md:w-[350px] h-full  p-2 bg-[#FFE3BF] rounded-[8px] hover:translate-y-1">
                  <div className="flex flex-col">
                    <img
                      src={project.img}
                      className="w-full h-[150px] border border-gray-300 rounded-[8px]"
                    />
                    <span className="text-[rgba(26,13,3,0.5)] text-[10px] font-[400] leading-[16px]">
                      {project.category.length > 0
                        ? project.category.join(", ")
                        : project.category[0]}
                    </span>
                    <span className="text-[16px] font-[500] leading-[16px] text-[#1A1003] mt-1">
                      {project.name}
                    </span>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
