import { motion } from "framer-motion";

function Marquee({imagesUrl, direction}){
    return(
        <div className="flex w-full gap-32">
            <motion.div initial={{ x: direction === "left" ? "0" : "-100%"}} animate={{ x: direction === "left" ? "-100%" : "0"}} transition={{ ease: "linear", duration: 15, repeat: Infinity}} className="flex flex-shrink-0 gap-24 py-7">
                {imagesUrl.map((url, index) => <img className="" src={url} alt="" />)}
            </motion.div>
            <motion.div initial={{ x: direction === "left" ? "0" : "-100%"}} animate={{ x: direction === "left" ? "-100%" : "0"}} transition={{ ease: "linear", duration: 15, repeat: Infinity}} className="flex flex-shrink-0 gap-24 py-7">
                {imagesUrl.map((url, index) => <img className="" src={url} alt="" />)}
            </motion.div>
        </div>
    )
}

export default Marquee;