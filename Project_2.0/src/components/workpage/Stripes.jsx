import Stripe from "./Stripe";
import "./Marquee.css";

function Stripes(){
    const data = [
      {
        url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
        number: 48,
      },
      {
        url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
        number: 11,
      },
      {
        url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
        number: 13,
      },
      {
        url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
        number: 48,
      },
      {
        url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
        number: 11,
      },
    ];
    return(
        <div className="w-full overflow-hidden">
            <div className="mb-32 flex w-full items-center">
                    {data.map((elem, index)=>{
                        return  <Stripe key={index} val={elem} />
                    })}
            </div>
        </div>
    )
}

export default Stripes;