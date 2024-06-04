import waschool from "@/assets/img/3wa.png";
import cartoonely from "@/assets/img/cartoonely.webp";
import IP from "@/assets/img/IP.png";
import oclock from "@/assets/img/oclock.png";
import podo from "@/assets/img/podologue.png";
import quin from "@/assets/img/quityss.png";
import bpi from "@/assets/img/bpi.png";
import theodo from "@/assets/img/theodo.webp";

const ClientsLogos = () => {
  const logos: string[] = [
    IP,
    oclock,
    bpi,
    theodo,
    podo,
    cartoonely,
    quin,
    waschool,
  ];

  const ClientLogoComponent = ({ url }: { url: string }) => {
    return (
      <div className="mx-auto px-3 transition duration-200 ease-in-out hover:grayscale-0 md:grayscale flex-1">
        <img src={url} className="mx-auto" />
      </div>
    );
  };
  return (
    //Todo: replace by flex
    <div className="flex items-center border border-y-2 py-5 w-full  md:py-10">
      {logos.splice(0,4).map((logo, id) => (
        <ClientLogoComponent key={id} url={logo} />
      ))}
    </div>
  );
};
export default ClientsLogos;
