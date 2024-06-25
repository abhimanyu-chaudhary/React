import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";

function Testimonials(){
    const data = [
      {
        image:
          "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/661c5cd1c5d2e2795c264de0_Katie.jpg",
        matter:
          "We had a wonderful experience working with Refokus for our recent website redesign. We were grateful for their partnership, guidance, patience, and expertise. They're masters of their craft, they helped us evolve our brand and level up our website, and we're incredibly proud of where we netted out.",
        name: "Katie Kearsey",
        role: "Right Side Up",
        show: true,
      },
      {
        image:
          "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/661c4a2faec9b0d14a859536_ron.png",
        matter:
          "Working with Refokus is an absolute pleasure, they are artists of their craft, work with passion and patience to understand the objective and reach it in an ultimate way!",
        name: "Ron Rofe",
        role: "Rainfall- Venture Capital",
        show: false,
      },
      {
        image:
          "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/661c5cdbec1547345ff59e02_eugene.jpg",
        matter:
          "Refokus was efficient and proactive in achieving quality results. The final output was well made and created a huge impact with regards to brand awareness for our brand. The experience also managed to bag several awards and was mentioned during the keynote of Webflow Conf. Refokus’ response timing was always on point as well.",
        name: "Eugene Ernoult",
        role: "Like Magic",
        show: false,
      },
      {
        image:
          "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/6622e09b67c816482cb3d1e2_uzV9x4ZN_400x400.jpg",
        matter:
          "Our collaboration with Refokus was incredibly effective. They have an insightful, senior team spanning many functions and they created a striking, articulate landing page for our AI startup that I'm extremely satisfied with. I showed some of the early design explorations to a friend who works on Apple's Interaction Design team and he remarked that the creative range was unusual to see from a single agency.",
        name: "Mike Conover",
        role: "Brighwave",
        show: false,
      },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // const handleNext = () => {
    //     setCurrentIndex((prev) => (prev + 1) % data.length);
    //     console.log(currentIndex);
    // }

    // const handlePrev = () => {
    //     setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
    //     console.log(currentIndex);
    // }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % data.length);
        },5000);

        return () => clearInterval(interval);
    }, [data.length]);

    const handleButtonClick = (index) => {
        setCurrentIndex(index);
    }

    return (
      <div className="py-24 flex justify-center items-center gap-3">
        <div>
          <div className="flex flex-col gap-2">
            {data.map(( _, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`w-[2px] rounded-xl  ${
                  index === currentIndex ? "h-9" : "h-5"
                } ${index === currentIndex ? "bg-zinc-400" : "bg-zinc-600"}`}
              />
            ))}

            {/* <button onClick={handlePrev} className="w-7 h-7 rounded-full bg-orange-300">P</button>
                    <button onClick={handleNext} className="w-7 h-7 rounded-full bg-blue-300">N</button> */}
          </div>
        </div>
        <div>
          {data.map((elem, index) => {
            return (
              <Testimonial
                key={index}
                val={elem}
                show={index === currentIndex}
              />
            );
          })}
        </div>
      </div>
    );
}
export default Testimonials;