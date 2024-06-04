//import IconCloud from "@/components/magicui/icon-cloud";
import tsIcon from "@/assets/icons/tsicon.svg";
import reactIcon from "@/assets/icons/react.svg";
import nestIcon from "@/assets/icons/nest.svg";
import vitestIcon from "@/assets/icons/vitest.svg";
import prismaIcon from "@/assets/icons/prisma.svg";
import tailwindIcon from "@/assets/icons/tailwind.svg";
//import bootstrapIcon from "@/assets/icons/bootstrap.svg";
import jiraIcon from "@/assets/icons/jira.svg";
import { Button } from "@/components/ui/button";

const Services = () => {
  /* const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "eslint",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "prisma",
    "redux",
    "figma",
    "svelte",
  ]; */
  const domains: {
    title: string;
    content: string;
    icon: string;
    bg_className: string;
  }[] = [
    {
      title: "Langage: Typescript",
      content:
        "Un langage typé pour une plus grande sérénité dans le développement",
      icon: tsIcon,
      bg_className: "bg-sky-300",
    },
    {
      title: "Frontend: React",
      content: "Framework qui permet la création d'applications web modulaires",
      icon: reactIcon,
      bg_className: "bg-blue-200",
    },
    {
      title: "Backend: Nest.js",
      content:
        "Framework qui permet la création d'API en TS pour communiquer avec votre base de donnée depuis le front",
      icon: nestIcon,
      bg_className: "bg-red-200",
    },
    {
      title: "Tests: Vitest",
      content: "Tests automatisés pour valider vos fonctions métiers",
      icon: vitestIcon,
      bg_className: "bg-lime-200",
    },
    {
      title: "Base de donnée: PostgreSQL (Prisma)",
      content: "Permet de gérer vos données facilement et de les faire évoluer",
      icon: prismaIcon,
      bg_className: "bg-emerald-100",
    },
    {
      title: "UI: TailwindCSS / Shadcn, Bootstrap",
      content: "Des composants rapides à mettre en place pour un effet waouw!",
      icon: tailwindIcon,
      bg_className: "bg-indigo-300",
    },
    {
      title: "Gestion de projet: JIRA, Fokjlenot",
      content:
        "Meilleurs Saas pour gérer et suivre l'avancement de vos projets",
      icon: jiraIcon,
      bg_className: "bg-blue-200",
    },
  ];

  const products = [
    {
      title: "Saas",
      content:
        "Développez des applications SaaS robustes et évolutives avec des fonctionnalités adaptées à vos utilisateurs et une architecture optimisée.",
    },
    {
      title: "Landing Page",
      content:
        "Conception de landing pages percutantes qui captivent vos visiteurs et maximisent vos conversions.",
    },
    {
      title: "E-commerce",
      content:
        "Création de plateformes e-commerce dynamiques et sécurisées, offrant une expérience utilisateur fluide et engageante.",
    },
  ];

  const SkillCard = ({
    item,
  }: {
    item: {
      title: string;
      content: string;
      icon: string;
      bg_className: string;
    };
  }) => {
    return (
      <div className="md:w-3/12 mx-auto w-11/12">
        <div
          className={`mx-auto flex h-44 w-44 items-center justify-center rounded-lg p-5 ${item.bg_className}`}
        >
          <img src={item.icon} />
        </div>
        <div className="mt-10 text-center">
          <h4 className="mb-5 text-4xl font-bold">{item.title}</h4>
          <p className="mx-auto w-11/12 text-2xl leading-relaxed">
            {item.content}
          </p>
        </div>
      </div>
    );
  };

  const Product = ({ item }: { item: { title: string; content: string } }) => {
    return (
      <div className="mx-auto w-11/12 md:w-3/12">
        <h4 className="mb-5 text-5xl font-bold">{item.title}</h4>
        <p className="text-lg leading-relaxed">{item.content}</p>
      </div>
    );
  };

  return (
    <div className="mx-auto w-11/12 py-20 md:w-8/12">
      <div className="relative mb-9 text-center leading-relaxed">
        <h1 className="text-4xl font-bold">Services</h1>
        {/* <div className="mx-auto px-10 md:w-1/2">
          <IconCloud iconSlugs={slugs} />
        </div> */}
      </div>
      <div className="flex flex-col gap-24 md:gap-0 md:flex-row md:flex-wrap md:justify-between">
        {domains.map((item, id) => {
          return <SkillCard key={id + item.title} item={item} />;
        })}
      </div>
      <div className="mt-20 flex flex-col gap-10 md:flex-row md:justify-between">
        {products.map((item, id) => {
          return <Product key={id} item={item} />;
        })}
      </div>
      <div className="mt-20 text-center">
        <Button className="transform p-8 text-3xl drop-shadow-2xl active:translate-y-1 active:drop-shadow-none">
          <a href="#contact">Demander un devis</a>
        </Button>
      </div>
    </div>
  );
};
export default Services;
