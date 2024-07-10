import { motion } from "framer-motion";

function Stripe({val}){
    
    return(
        <div className="w-full flex">
            <motion.div initial={{ x: "0"}} animate={{ x: "-100%"}} transition={{ ease: "linear", duration: 2, repeat: Infinity }} className="w-[20vw] flex justify-between items-center py-5 px-6  border-t-[1px] border-r-[1px] border-b-[1px] border-zinc-400 ">
                <img src={val.url} alt="" />
                <p>{val.number}</p>   
            </motion.div>
            <motion.div initial={{ x: "0"}} animate={{ x: "-100%"}} transition={{ ease: "linear", duration: 2, repeat: Infinity }} className="w-[20vw] flex justify-between items-center py-5 px-6  border-t-[1px] border-r-[1px] border-b-[1px] border-zinc-400 ">
                <img src={val.url} alt="" />
                <p>{val.number}</p>   
            </motion.div>
            
            
        </div>
        
    )
}

export default Stripe;