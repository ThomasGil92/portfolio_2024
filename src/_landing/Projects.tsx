import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import enterapie from "@/assets/capture/enterapie-home.webp";
import oclock from "@/assets/capture/oclock.png";
//import { BorderBeam } from "@/components/magicui/border-beam";

const Projects = () => {
  const CircleImage = ({ src }: { src: string }) => {
    
    return (
      <>
        <div
          className={`p-2 relative h-72 w-72 border-spacing-2 rounded-full border bg-cover bg-center bg-no-repeat object-contain drop-shadow-2xl`}
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
      <div className="mb-5 md:mb-20 flex flex-col md:justify-between gap-5 md:flex-row">
        <Card className="md:w-7/12 drop-shadow-2xl">
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
    <div className="mx-auto w-11/12 md:w-8/12">
      <div className="mb-9 text-center leading-relaxed">
        <h1 className="mb-9 text-4xl font-bold">Projets</h1>
        <p>Quelques projets sur lesquels j'ai pu travailler.</p>
      </div>
      <ProjectRow
        title="O'Clock"
        text={[
          "Formation en développement web front et back",
          "React, Redux, Node.js, HTML, Css, ...",
        ]}
        img={oclock}
      />
      <ProjectRow
        title="Enterapie"
        text={[
          "Application web de suivi médical dans le domaine de la nutrition.",
          "Api Rest, graphiques, intégration, algorithmes. Utilisation de nextJs",
        ]}
        img={enterapie}
      />
    </div>
  );
};

export default Projects;
