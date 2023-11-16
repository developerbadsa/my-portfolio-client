import { Helmet } from "react-helmet-async";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";

const Home = () => {
      return (
            <main className="bg-[#0F1624] text-gray-300 ">
                  <Helmet>
                        <title>Home || Rahim Badsa</title>
                  </Helmet>
                  <Hero></Hero>
                  <Projects></Projects>
            </main>
      );
};

export default Home;