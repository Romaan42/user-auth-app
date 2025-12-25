import About from "./components/home/About";
import Banner from "./components/home/Banner";
import Notes from "./components/home/Notes";
import SkillsSection from "./components/home/SkillsSection";
import Teach from "./components/home/Teach";


export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <SkillsSection />
      <Teach />
      <Notes />
      <h1>welcome</h1>
    </main>
  );
}
