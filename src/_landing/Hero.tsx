import avatar from "@/assets/img/logo.png";
import { Button } from "@/components/ui/button";
import malter from "@/assets/icons/malter.svg";
import starIcon from "@/assets/icons/star.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="mx-auto w-11/12 py-10 text-center md:w-8/12 md:py-20">
      <img src={avatar} className="mx-auto h-52 w-52 md:h-96 md:w-96" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <h1
          className="text-5xl md:text-6xl font-semibold leading-normal"

          /* style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s ",
          }} */
        >
          Développeur <span className="text-blue-gradient">Front-end</span>
        </h1>

        <p className="text-lg mt-5">
          Création de sites internet, renforcement d'équipe, formations au
          développement web. Je vous propose des solutions sur-mesure{" "}
        </p>
        <div className="flex flex-col md:flex-row md:items-center md:justify-around">
          <div className="flex justify-center py-8">
            <a
              href="https://www.malt.fr/profile/thomasgil?overview"
              className="border-blue-gradient rounded-lg p-4 drop-shadow-xl transition hover:scale-125 hover:transform hover:drop-shadow-2xl"
            >
              <div className="">
                <p>
                  <span className="flex gap-2">
                    <img className="w-4" src={malter} />
                    <img className="w-4" src={malter} />
                    <img className="w-4" src={malter} />
                    <span className="ml-1.5 bg-[#EAF5FF] px-1 text-[#264FFA]">
                      Supermalter
                    </span>
                  </span>
                </p>
                <p className="mt-1 flex items-center text-lg font-semibold text-slate-600">
                  15 missions
                  <span className="ml-6 flex">
                    <img src={starIcon} className="w-6" />
                    <img src={starIcon} className="w-6" />
                    <img src={starIcon} className="w-6" />
                    <img src={starIcon} className="w-6" />
                    <img src={starIcon} className="w-6" />
                  </span>
                </p>
              </div>
            </a>
          </div>

          <Button className="transform mx-auto md:mx-0 p-10 md:p-12 text-3xl drop-shadow-xl active:translate-y-1 active:drop-shadow-none">
            <a href="#contact">Me contacter</a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
export default Hero;
