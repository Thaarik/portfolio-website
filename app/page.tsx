import { About } from "@/components/About/About";
import { Experience } from "@/components/Experience/Experience";
import { Projects } from "@/components/Projects/Projects";
import { Skills } from "@/components/Skills/Skills";
import { getPortfolioData } from "@/lib/portfolio-data";
import "react-vertical-timeline-component/style.min.css";

export const revalidate = 60;

export default async function Home() {
const {experience, skills, projects } = await getPortfolioData();

  return (
    <div
      id="about"
      className="w-full grow flex flex-col justify-around items-center "
    >
      <About />
      <Experience experience={experience} />
      <Skills skills={skills} />
      <Projects projects={projects} />
    </div>
  );
}
