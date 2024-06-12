import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import enterapie from "@/assets/capture/enterapie-home.webp";
import oclock from "@/assets/capture/oclock.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
//import { BorderBeam } from "@/components/magicui/border-beam";

const Projects = () => {
  const ref = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-25% 0px -25% 0px" });
  const isProject1InView = useInView(project1Ref, {
    once: true,
    margin: "-25% 0px -25% 0px",
  });
  const isProject2InView = useInView(project2Ref, {
    once: true,
    margin: "-25% 0px -25% 0px",
  });

  const comeFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const comeFromRight = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 },
  };

  const CircleImage = ({ src }: { src: string }) => {
    return (
      <>
        <div
          className={`relative mx-auto h-72 w-72 border-spacing-2 rounded-full border bg-cover bg-center bg-no-repeat object-contain p-2 drop-shadow-2xl md:mx-0`}
          style={{ backgroundImage: `url(${src})` }}
        >
          {/*  <BorderBeam borderWidth={4} duration={5}/> */}
        </div>
      </>
    );
  };

  const ProjectRow = (props: {
    title: string;
    text: string[];
    img: string;
  }) => {
    return (
      <div className="mb-16 flex flex-col gap-5 md:mb-20 md:flex-row md:justify-between">
        <Card className="drop-shadow-2xl md:w-7/12">
          <CardHeader>
            <CardTitle>{props.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {props.text.map((text, id) => {
              return <p key={id + props.title}>{text}</p>;
            })}
          </CardContent>
        </Card>
        <CircleImage src={props.img} />
      </div>
    );
  };

  return (
    <div className="mx-auto w-11/12 md:w-8/12" id="projects">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={comeFromBottom}
        transition={{ duration: 0.5 }}
        className="mb-9 text-center leading-relaxed md:mb-20"
      >
        <h1 className="mb-9 text-6xl font-bold">Projets</h1>
        <p className="text-lg">
          Quelques projets sur lesquels j'ai pu travailler.
        </p>
      </motion.div>
      <motion.div
        ref={project1Ref}
        initial="hidden"
        animate={isProject1InView ? "visible" : "hidden"}
        variants={comeFromRight}
      >
        <ProjectRow
          title="O'Clock"
          text={[
            "Formation en développement web front et back",
            "React, Redux, Node.js, HTML, Css, ...",
          ]}
          img={oclock}
        />
      </motion.div>
      <motion.div
        ref={project2Ref}
        initial="hidden"
        animate={isProject2InView ? "visible" : "hidden"}
        variants={comeFromRight}
      >
        <ProjectRow
          title="Enterapie"
          text={[
            "Application web de suivi médical dans le domaine de la nutrition.",
            "Api Rest, graphiques, intégration, algorithmes. Utilisation de nextJs",
          ]}
          img={enterapie}
        />
      </motion.div>
    </div>
  );
};

export default Projects;
