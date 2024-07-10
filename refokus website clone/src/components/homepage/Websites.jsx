import Website from "./Website";

function Websites(){
    const data = [
      {
        title: "ARQITEL",
        img1: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15-p-500.webp",
        img2: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14-p-1080.webp",
        video:
          "https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm",
        topic: "Concept, Design, 3D, Webflow+WebGL Development",
        matter: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
        btn: true,
        color: "#5355EE"
      },
      {
        title: "Cula",
        img1: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204.png",
        img2: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203.png",
        video:
          "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4",
        topic: "Concept, Design, 3D, Webflow+WebGL Development",
        matter: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
        btn: true,
        color: "#4A576B"
      },
      {
        title: "Webflow",
        img1: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-800.webp",
        img2: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65f1160e50447ddfb490fb59_portfolioCard_cc-02%20(1)-p-1080.webp",
        video:
          "https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4",
        topic: "Concept, Design, Webflow Development",
        matter: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
        btn: true,
        color: "#1626F3"
      },
      {
        title: "Refokus",
        img1: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cd6ec7666ac6009cfcb7db_11.jpg",
        img2: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cd6ecc885579ba1b4ffc97_10-p-1080.jpg",
        video:
          "https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm",
        topic: "Concept, Design, 3D, Webflow+WebGL Development, AI Integrations",
        matter: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
        btn: true,
        color: "#3E4365"
      },
      {
        title: "MANIV",
        img1: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b415e16156819899272250_Frame%202.png",
        img2: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b2cab86e8df24e528c4441_Frame%201.png",
        video:
          "https://cdn.refokus.com/website/Maniv-Compressed.mp4",
        topic: "Branding, Design, Webflow+GSAP Development",
        matter: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
        btn: true,
        color: "#2DCB76"
      },
      {
        title: "SILVR",
        img1: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cc29f414c45ee4f46aa3ba_01-p-500.jpg",
        img2: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cc29f66c6594c072ba1a38_02-p-1080.jpg",
        video:
          "https://cdn.refokus.com/website/2022/videos/Silvr.webm",
        topic: "Design, Webflow Development",
        matter: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
        btn: true,
        color: "#FF7548",
      },
    ];

    return(
        <div className="flex flex-col gap-10 mt-40 pb-40">
            {data.map((elem, index) => {
                return  <Website key={index} val={elem} />
            })}
        </div>
    )
}
export default Websites;