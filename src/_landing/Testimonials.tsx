import { Separator } from "@/components/ui/separator";
import theodocl from "@/assets/capture/theodocl.png";
import enterapiets from "@/assets/capture/enterapiets.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Testimonials = () => {
  const Ref1 = useRef(null);
  const Ref2 = useRef(null);
  const Ref3 = useRef(null);
  const is1InView = useInView(Ref1, {
    once: true,
    margin: "-25% 0px -25% 0px",
  });
  const is2InView = useInView(Ref2, {
    once: true,
    margin: "-25% 0px -25% 0px",
  });
  const is3InView = useInView(Ref3, {
    once: true,
    margin: "-25% 0px -25% 0px",
  });

  const comeFromRight = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 },
  };
  const comeFromLeft = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };

  const testimonials = [
    {
      text: [
        "Sa compétence et son professionnalisme font de lui un collaborateur précieux pour tout projet ou entreprise.",
        "Son professionnalisme et son expertise dans son domaine sont évidents.",
      ],
      author: "Susie - École O'Clock",
      ref: Ref1,
      isInView: is1InView,
      variant: comeFromRight,
    },
    {
      text: [
        "C'était un plaisir de travailler avec Thomas pour nos besoins de développement front en JS!",
        "Thomas était dédié a son travail et tres flexible et réactif pour les besoins du projet. En plus, il a bien fait des propositions pour les solutions pour atteindre et dépasser les besoins pour les projets.",
      ],
      author: "Timothy Swartz - Integrative Phenomics",
      img_src: enterapiets,
      ref: Ref2,
      isInView: is2InView,
      variant: comeFromLeft,
    },
    {
      text: [
        "On a été très satisfait de l'accompagnement de Thomas qui est très professionnel et a livré un travail de qualité dans les délais.",
        "Je recommande !",
      ],
      author: "Cyrille Lafont - Theodo / BPI France",
      img_src: theodocl,
      ref: Ref3,
      isInView: is3InView,
      variant: comeFromRight,
    },
  ];

  return (
    <div className="flex flex-col">
      <Separator className="h-1" />
      <div className="mx-auto flex w-11/12 flex-col items-end md:w-8/12 md:flex-row md:gap-20 md:py-20">
        {testimonials.map((item, id) => (
          <motion.div
            ref={item.ref}
            initial="hidden"
            animate={item.isInView ? "visible" : "hidden"}
            variants={item.variant}
            transition={{ duration: 0.5 }}
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
          </motion.div>
        ))}
      </div>
      <Separator className="h-1" />
    </div>
  );
};

export default Testimonials;
