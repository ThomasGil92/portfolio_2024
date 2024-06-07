import { motion, useInView } from "framer-motion";
import waschool from "@/assets/img/3wa.png";
import cartoonely from "@/assets/img/cartoonely.webp";
import IP from "@/assets/img/IP.png";
import oclock from "@/assets/img/oclock.png";
import podo from "@/assets/img/podologue.png";
import quin from "@/assets/img/quityss.png";
import bpi from "@/assets/img/bpi.png";
import theodo from "@/assets/img/theodo.webp";
import { useRef } from "react";

const ClientsLogos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-25% 0px -25% 0px" });
  const logos: string[] = [
    IP,
    oclock,
    bpi,
    theodo,
    podo,
    cartoonely,
    quin,
    waschool,
  ];

  const ClientLogoComponent = ({ url }: { url: string }) => {
    return (
      <div className="mx-auto flex-1 px-3 transition duration-200 ease-in-out hover:grayscale-0 md:grayscale">
        <img src={url} className="mx-auto" />
      </div>
    );
  };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      className="flex w-full items-center border border-y-2 py-5 md:py-10"
    >
      {logos.splice(0, 4).map((logo, id) => (
        <ClientLogoComponent key={id} url={logo} />
      ))}
    </motion.div>
  );
};
export default ClientsLogos;
