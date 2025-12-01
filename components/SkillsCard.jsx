import { motion } from "framer-motion";
import { useState } from "react";

const SkillsCard = ({skill, index}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const getWarna = (level) => {
        if(level === "Beginner") return {color: "#F97316"}; 
        if(level === "Intermediate") return {color: "#3B82F6"};
    }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative h-[180px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 flex flex-col items-center justify-center gap-4 hover:bg-aksen/10 hover:border-aksen/30 transition-all duration-300"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-4xl" style={{ color: skill.color }}>
            {skill.icon}
          </div>
          <h4 className="font-bold text-center text-sm md:text-base">{skill.name}</h4>
          {/* badge */}
          <div className="px-3 py-1 rounded-full text-xs font-medium text-white" 
          style={{backgroundColor: getWarna(skill.level).color}}>
            {skill.level}
          </div>
          <div className="text-xs text-white/60">
            Learning
          </div>
          
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 bg-aksen/20 backdrop-blur-sm rounded-xl border border-aksen/30 p-5 flex items-center justify-center rotate-y-180"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-sm md:text-md text-white/80 text-center leading-relaxed">
            {skill.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default SkillsCard