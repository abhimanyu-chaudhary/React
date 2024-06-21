import Product from "./Product";

function Products(){
    const data = [
        {title: "Arqitel", description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: true, case: false},
        {title: "Cula", description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", live: true, case: true},
        {title: "Layout Land", description: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow", live: true, case: false},
        {title: "TTR", description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", live: true, case: false},
        {title: "Maniv", description: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", live: true, case: true},
    ];
    return(
        <div className="w-full">
            {data.map((elem, index)=> {
                return <Product val={elem} />
            })}
        </div>
    )
}
export default Products;