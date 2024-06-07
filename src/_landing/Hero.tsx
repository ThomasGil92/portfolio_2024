import avatar from "@/assets/img/logo.png";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="mx-auto w-11/12 py-5 text-center md:w-8/12">
      <img src={avatar} className="mx-auto h-52 w-52 md:h-96 md:w-96" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <h1
          className="text-5xl font-semibold leading-normal"

          /* style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s ",
          }} */
        >
          Développeur Front-end
        </h1>
        <p className="text-lg">
          Création de sites internet, renforcement d'équipe, formations au
          développement web. Je vous propose des solutions sur-mesure{" "}
        </p>
        <Button className="mt-5 transform drop-shadow-2xl active:translate-y-1 active:drop-shadow-none">
          <a href="#contact">Me contacter</a>
        </Button>
      </motion.div>
    </div>
  );
};
export default Hero;
