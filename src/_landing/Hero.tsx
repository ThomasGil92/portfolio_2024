import avatar from "@/assets/img/logo.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="w-11/12 divide-y-4 py-5 text-center mx-auto md:w-8/12">
      <img src={avatar} className="mx-auto h-52 w-52" />
      <div>
        <h1 className="text-5xl font-semibold leading-normal">
          Développeur Front-end
        </h1>
        <p className="text-lg">
          Création de sites internet, renforcement d'équipe, formations au
          développement web. Je vous propose des solutions sur-mesure{" "}
        </p>
        <Button className="mt-5 transform drop-shadow-2xl active:translate-y-1 active:drop-shadow-none">
          <a href="#contact">Me contacter</a>
        </Button>
      </div>
    </div>
  );
};
export default Hero;
