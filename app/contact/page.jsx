"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import Swal from "sweetalert2";


import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 895 619 037 007"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "fathangunawan19@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Banjar, Jawa Barat, Indonesia"
  },
];

import { motion } from "framer-motion";



const Contact = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstname = e.target[0].value;
    const lastname = e.target[1].value;
    const email = e.target[2].value;
    const subject = e.target[3].value;
    const message = e.target[4].value;

    const res = await fetch ("/api/send", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({firstname, lastname, email, subject, message}),
    });

    if(res.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent',
        text: 'Your message has been sent successfully!',
        theme: 'dark',
        confirmButtonColor: "#2BB3BC",
      });
      e.target.reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your message could not be sent, please try again later.",
        theme: 'dark',
        confirmButtonColor: "#2BB3BC",
      });
    }

  }

  return (
    <motion.section
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {delay: 2.2, duration: 0.3, ease: "easeIn"}}}
    className="py-6"
    >
      <div className="container mx-auto p-6">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form 
            className="flex flex-col gap-6 p-10 bg-konten rounded-xl"
            onSubmit={handleSubmit}
            action="">
              <h3 className="text-4xl text-aksen">Contact Me</h3>
              <p className="text-white/60">If you have any questions or project ideas, don’t hesitate to get in touch with me.</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" required/>
                <Input type="lastname" placeholder="Last Name" required/>
                <Input type="email" placeholder="Email" required/>
                <Input type="subject" placeholder="Subject" required/>
              </div>
              
              {/* Textarea */}
              <Textarea 
              className="h-[200px]"
              placeholder="Type your message here..."
              required
              />
              {/* btn */}
              <Button size="md" className="max-w-40">
                Send Message
              </Button>

            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center order-1 xl:order-none xl:justify-end mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index)=> {
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-konten text-aksen rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-lg md:text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact