import React from 'react';
import { Link, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./homepage/HomePage";
import WorkPage from "./workpage/WorkPage";
import Button from './workpage/Button';
import AboutPage from './aboutpage/AboutPage';
import NewsPage from './newspage/NewsPage';
import CareerPage from './careers/CareerPage';
import "../../src/index.css";

function Routing(){
  const location = useLocation();
  
    return (
      <>
        <div className='w-full bg-zinc-950 fixed z-10'>
            <div className="max-w-screen-xl mx-auto py-5 flex items-center justify-between border-b-[.2px]  ">
            <div className=" flex items-center">
                <Link to="/">
                <img
                className="mr-20"
                src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
                alt=""
                /> </Link>
                <div className="flex gap-14 ">
                  {[
                      { title: "Home", sign: "/" },
                      { title: "Work", sign: "/work" },
                      { title: "About", sign: "/about" },
                      { title: "News", sign: "/news" },
                      { title: "Careers", sign: "/careers" },
                  ].map((elem, index) => {
                    const isActive = location.pathname === elem.sign;
                      return (
                      <div className='flex items-center relative gap-1'> 
                        {isActive && <div className='w-1 h-1 bg-[#00ff19] rounded-full  shadow-custom-green'></div>}
                        <Link to={elem.sign} key={index} className="text-sm">
                          {elem.title}
                        </Link>
                      </div>
                      );
                  })}
                </div>
            </div>

            <Button />
            </div>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/careers" element={<CareerPage />} />
        </Routes>
      </>
    );
}
export default Routing;