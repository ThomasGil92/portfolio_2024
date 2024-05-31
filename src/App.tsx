import ClientsLogos from "./_landing/ClientsLogos";
import Hero from "./_landing/Hero";
import NavBar from "./_landing/NavBar";
import { cn } from "./lib/utils";

function App() {
  return (
    <main className={cn("h-full w-full")}>
      <NavBar />
      <Hero/>
      <ClientsLogos/>
    </main>
  );
}

export default App;
