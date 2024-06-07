import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import reactIcon from "@/assets/icons/react.svg";
import cleanIcon from "@/assets/icons/clean.svg";
import secure from "@/assets/icons/secure.svg";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-25% 0px -25% 0px" });
  const isCard1InView = useInView(cardRef1, {
    once: true,
    margin: "-25% 0px -25% 0px",
  });
  const isCard2InView = useInView(cardRef2, {
    once: true,
    margin: "-25% 0px -25% 0px",
  });
  const isCard3InView = useInView(cardRef3, {
    once: true,
    margin: "-25% 0px -25% 0px",
  });
  const isTextInView = useInView(textRef, {
    once: true,
    margin: "-25% 0px -25% 0px",
  });

  const comeFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const scaleUp = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  const CustomIcon = ({ src, spin }: { src: string; spin?: boolean }) => {
    return (
      <img
        className={spin ? "h-14 w-14 animate-spin-slow" : "h-14 w-14"}
        src={src}
      />
    );
  };

  const CustomCard = (props: { src: string; text: string; spin?: boolean }) => {
    return (
      <Card className="h-full transform drop-shadow-xl transition duration-200 hover:z-30 hover:scale-125">
        <CardHeader>
          <CardTitle>
            <CustomIcon spin={props.spin} src={props.src} />
          </CardTitle>
        </CardHeader>
        <CardContent>{props.text}</CardContent>
      </Card>
    );
  };
  return (
    <div className="mx-auto w-11/12 py-20 md:w-8/12" id="about">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={comeFromBottom}
        transition={{ duration: 0.5 }}
        className="mb-9 text-center leading-relaxed"
      >
        <h1 className="mb-9 text-4xl font-bold">Qui suis-je?</h1>
        <p>
          Spécialiste du développement web front-end, je développe des sites web
          sur mesure afin de garantir l'efficacité de votre produit. Votre coeur
          de métier est ma principale préoccupation.
        </p>
      </motion.div>
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        <motion.div
          ref={cardRef1}
          initial="hidden"
          animate={isCard1InView ? "visible" : "hidden"}
          variants={comeFromBottom}
          transition={{ duration: 0.5 }}
        >
          <CustomCard
            src={reactIcon}
            text={
              "Utilisation avancée de React et son écosystème (Redux, React Router, etc.) pour développer des interfaces utilisateur intuitives et réactives."
            }
            spin={true}
          />
        </motion.div>
        <motion.div
          ref={cardRef2}
          initial="hidden"
          animate={isCard2InView ? "visible" : "hidden"}
          variants={comeFromBottom}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CustomCard
            src={cleanIcon}
            text={
              "Pratiques de développement centrées sur l'écriture de code propre, bien structuré et facilement maintenable, facilitant ainsi les futures mises à jour et évolutions."
            }
          />
        </motion.div>
        <motion.div
          ref={cardRef3}
          initial="hidden"
          animate={isCard3InView ? "visible" : "hidden"}
          variants={comeFromBottom}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CustomCard
            src={secure}
            text={
              "Optimisation des performances pour des temps de chargement rapides et mise en place de mesures de sécurité robustes pour protéger les données et les utilisateurs."
            }
          />
        </motion.div>
      </div>
      <div className="flex flex-col gap-8 pt-14 text-center md:mt-24 md:flex-row md:justify-around md:pt-0">
        <motion.p
          ref={textRef}
          initial="hidden"
          animate={isTextInView ? "visible" : "hidden"}
          variants={scaleUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold md:text-4xl"
        >
          4 années d'expériences
        </motion.p>
        <motion.p
          ref={textRef}
          initial="hidden"
          animate={isTextInView ? "visible" : "hidden"}
          variants={scaleUp}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl font-bold md:text-4xl"
        >
          + de 50 projets
        </motion.p>
      </div>
    </div>
  );
};

export default About;
