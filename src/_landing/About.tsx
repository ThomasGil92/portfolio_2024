import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import reactIcon from "@/assets/icons/react.svg";
import cleanIcon from "@/assets/icons/clean.svg";
import secure from "@/assets/icons/secure.svg";

const About = () => {
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
      <Card className="drop-shadow-xl">
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
    <div className="mx-auto w-11/12 py-20 md:w-8/12">
      <div className="mb-9 text-center leading-relaxed">
        <h1 className="mb-9 text-4xl font-bold">Qui suis-je?</h1>
        <p>
          Spécialiste du développement web front-end, je développe des sites web
          sur mesure afin de garantir l'efficacité de votre produit. Votre coeur
          de métier est ma principale préoccupation.
        </p>
      </div>
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        <CustomCard
          src={reactIcon}
          text={
            "Utilisation avancée de React et son écosystème (Redux, React Router, etc.) pour développer des interfaces utilisateur intuitives et réactives."
          }
          spin={true}
        />
        <CustomCard
          src={cleanIcon}
          text={
            "Pratiques de développement centrées sur l'écriture de code propre, bien structuré et facilement maintenable, facilitant ainsi les futures mises à jour et évolutions."
          }
        />
        <CustomCard
          src={secure}
          text={
            "Optimisation des performances pour des temps de chargement rapides et mise en place de mesures de sécurité robustes pour protéger les données et les utilisateurs."
          }
        />
      </div>
      <div className="flex flex-col md:flex-row pt-14 text-center gap-8">
        <p className="text-3xl font-bold">4 années d'expériences</p>
        <p className="text-3xl font-bold">+ de 50 projets</p>
      </div>
    </div>
  );
};

export default About;
