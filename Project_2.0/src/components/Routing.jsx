import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./homepage/HomePage";
import WorkPage from "./workpage/WorkPage";
import Button from './workpage/Button';
import AboutPage from './aboutpage/AboutPage';
import NewsPage from './newspage/NewsPage';
import CareerPage from './careers/CareerPage';

function Routing(){
    return (
      <>
        <div className='w-full bg-zinc-950 fixed z-10'>
            <div className="max-w-screen-xl mx-auto py-5 flex items-center justify-between border-b-[.2px]  ">
            <div className=" flex items-center">
                <img href="/"
                className="mr-20"
                src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
                alt=""
                />
                <div className="flex gap-14 ">
                {[
                    { title: "Home", sign: "/" },
                    { title: "Work", sign: "/work" },
                    { title: "About", sign: "/about" },
                    { title: "News", sign: "/news" },
                    { title: "Careers", sign: "/careers" },
                ].map((elem, index) => {
                    return (
                    <Link to={elem.sign} key={index} className="text-sm">
                        {elem.title}
                    </Link>
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