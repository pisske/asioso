import Contact from "../components/Contact.js";
import Hero from "../components/Hero.js";
import NewsList from "../components/NewsList.js";
import Services from "../components/Services.js";
const HomePage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <NewsList />
      <Contact />
    </main>
  );
};
export default HomePage;
