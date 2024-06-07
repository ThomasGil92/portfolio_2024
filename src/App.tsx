import About from "./_landing/About";
import ClientsLogos from "./_landing/ClientsLogos";
import Contact from "./_landing/Contact";
import Hero from "./_landing/Hero";
import NavBar from "./_landing/NavBar";
import Projects from "./_landing/Projects";
import Services from "./_landing/Services";
import Testimonials from "./_landing/Testimonials";
import { cn } from "./lib/utils";

function App() {
  return (
    <main className={cn("h-full w-full scroll-smooth overflow-x-hidden")}>
      <NavBar />
      <Hero />
      <ClientsLogos />
      <About />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
