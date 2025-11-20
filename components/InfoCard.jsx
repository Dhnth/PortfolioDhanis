import { motion } from "framer-motion";

const InfoCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:bg-aksen/10 hover:border-aksen/30 transition-all duration-300 group"
    >
      <a href={item.href} target="_blank" className="flex items-center gap-4">
        <div className="text-aksen text-xl group-hover:scale-110 transition-transform duration-300">
          {item.icon}
        </div>
        <div className="flex-1">
          <div className="text-white/60 text-sm mb-1">{item.fieldName}</div>
          <div className="text-white font-medium text-sm md:text-base">{item.fieldValue}</div>
        </div>
      </a>
    </motion.div>
  );
};

export default InfoCard