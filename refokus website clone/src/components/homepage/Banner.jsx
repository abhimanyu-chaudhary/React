import { motion } from "framer-motion";

function Banner({val}){
    
    return(
        <div className="w-full flex items-center ">
            <motion.div initial={{ x: "0"}} animate={{ x: "-100%"}} transition={{ ease: "linear", duration: 3, repeat: Infinity }} className="text-2xl w-[24vw] border py-5 text-center">
                <h2>{val}</h2>
            </motion.div>
            <motion.div initial={{ x: "0"}} animate={{ x: "-100%"}} transition={{ ease: "linear", duration: 3, repeat: Infinity }} className="text-2xl w-[24vw] border py-5 text-center">
                <h2>{val}</h2>
            </motion.div>
        </div>
    )
}
export default Banner;