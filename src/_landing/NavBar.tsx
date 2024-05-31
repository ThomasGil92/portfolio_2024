import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
  return (
    <NavigationMenu className="min-w-full max-w-full bg-secondary/25 p-3">
      <div className="flex w-full flex-col items-center justify-between md:w-8/12 md:flex-row">
        {" "}
        <h2 className="text-blue-gradient text-3xl">{"{thomas-gil.fr}"}</h2>
        <NavigationMenuList className="flex-col md:flex-row md:gap-5">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#about"
              className={navigationMenuTriggerStyle()}
            >
              À propos
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#projects"
              className={navigationMenuTriggerStyle()}
            >
              Projets
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#services"
              className={navigationMenuTriggerStyle()}
            >
              Services
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <Button asChild>
          <NavigationMenuLink>Me contacter</NavigationMenuLink>
        </Button>
      </div>
    </NavigationMenu>
  );
};

export default NavBar;
