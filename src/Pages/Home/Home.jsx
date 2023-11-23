import { Helmet } from "react-helmet-async";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import AboutMe from "./Sections/AboutMe";

const Home = () => {
      return (
            <main className="bg-[#0F1624] text-gray-300 ">
                  <Helmet>
                        <title>Home || Rahim Badsa</title>
                  </Helmet>
                  <div className="max-w-6xl mx-auto">
                        <Hero></Hero>
                        <Projects></Projects>
                        <AboutMe></AboutMe>
                  </div>
            </main>
      );
};

export default Home;