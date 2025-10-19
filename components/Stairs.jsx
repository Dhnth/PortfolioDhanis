import { motion } from "framer-motion"
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
}

// calculate the reverse index for the staggred delay
const reverseIndex = (index)=> {
    const totalStep = 6; 
    return totalStep - index - 1;
}


const Stairs = () => {
  return (
    <>
    {/* render 6 motion divs each representing a step of the stairs, each div will  have  the same animation define by the StairAnimation object the delay for each div is calculate dynamically base on it's reversed index creating a staggres effect with decreasing delay for each subsequent step */}

    {[...Array(6)].map((_, index)=> {
        return (
        <motion.div
         key={index} 
         variants={stairAnimation} 
         initial="initial" 
         animate="animate" 
         exit="exit" 
         transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
        }}
        className="h-full w-full bg-white relative"
         />
    )
    })}

    </>
  )
}

export default Stairs