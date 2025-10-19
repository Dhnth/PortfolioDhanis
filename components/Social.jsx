import Link from "next/link";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/Dhnth",
    },
    {
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/fathan-gunawan-8b1909388/",
    },
    {
        icon: <FaInstagram />,
        path: "https://www.instagram.com/dhan_1s/",
    },
]


const Social = ({containerSyles, iconStyles}) => {
  return (
    <div className={containerSyles}>
        {socials.map((item, index) => {
            return <Link href={item.path} key={index} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
  )
}

export default Social