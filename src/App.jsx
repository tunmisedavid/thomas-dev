import { useEffect, useRef, useState } from "react";
import { About, AboutMe, Contact, Footer, Header, Portfolio, Skill } from "./sections";
import { ScrollMaintain } from "./components";

function App() {
  const [activeSection, setActiveSection] = useState("Home");

  const sectionRefs = {
    About: useRef(null),
    Skill: useRef(null),
    Portfolio: useRef(null),
    Contact: useRef(null),
  }; 


  useEffect(() => {
    const handleScrollToSection = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;

      for (const [key, ref] of Object.entries(sectionRefs)) {
        const el = ref.current;
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollY > offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(key);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScrollToSection);
    return () => window.removeEventListener("scroll", handleScrollToSection);
  }, []);

  const ScrollToSection = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  
  return (
    <div>
      <ScrollMaintain />
      <Header active={activeSection} onNavClick={ScrollToSection} />
      <About refProp={sectionRefs.About} />
      <AboutMe />
      <Skill refProp={sectionRefs.Skill} />
      <Portfolio refProp={sectionRefs.Portfolio} />
      <Contact refProp={sectionRefs.Contact} />
      <Footer />
    </div>
  );
}

export default App;
