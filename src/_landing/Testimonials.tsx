import { Separator } from "@/components/ui/separator";
import theodocl from "@/assets/capture/theodocl.png";
import enterapiets from "@/assets/capture/enterapiets.png";

const Testimonials = () => {
  const testimonials = [
    {
      text: [
        "Sa compétence et son professionnalisme font de lui un collaborateur précieux pour tout projet ou entreprise.",
        "Son professionnalisme et son expertise dans son domaine sont évidents.",
      ],
      author: "Susie - École O'Clock",
    },
    {
      text: [
        "C'était un plaisir de travailler avec Thomas pour nos besoins de développement front en JS!",
        "Thomas était dédié a son travail et tres flexible et réactif pour les besoins du projet. En plus, il a bien fait des propositions pour les solutions pour atteindre et dépasser les besoins pour les projets.",
      ],
      author: "Timothy Swartz - Integrative Phenomics",
      img_src: enterapiets,
    },
    {
      text: [
        "On a été très satisfait de l'accompagnement de Thomas qui est très professionnel et a livré un travail de qualité dans les délais.",
        "Je recommande !",
      ],
      author: "Cyrille Lafont - Theodo / BPI France",
      img_src: theodocl,
    },
  ];

  return (
    <div className="flex flex-col">
      <Separator className="h-1" />
      <div className="mx-auto flex w-11/12 flex-col items-end md:w-8/12 md:flex-row md:gap-20 md:py-20">
        {testimonials.map((item, id) => (
          <div
            key={id + item.author[0]}
            className="mx-auto my-10 flex w-10/12 flex-col md:my-0"
          >
            <img
              src={item.img_src}
              className="mx-auto mb-5 h-min w-min rounded-full"
            />
            <div>
              {item.text.map((text, textIndex) => (
                <p
                  key={textIndex + item.author[1]}
                  className="mb-2 text-xl italic leading-relaxed"
                >
                  "{text}"
                </p>
              ))}
              <p className="mt-5 text-2xl font-semibold">{item.author}</p>
            </div>
          </div>
        ))}
      </div>
      <Separator className="h-1" />
    </div>
  );
};

export default Testimonials;
