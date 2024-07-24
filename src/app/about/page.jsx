import ProjectHeader from "@/components/projectHeader/ProjectHeader";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AboutCard from "@/components/ProjectComponent/AboutCard";

export const metadata = {
  title: "Portfolio - Projects",
  description: "The projects page of my portfolio.",
};
const cards = [1, 2, 3, 4, 5, 6];
export default function About() {
  return (
    <div>
      <Navbar
        options={[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/projects", label: "Projects" },
          { path: "/uses", label: "Uses" },
        ]}
      />
      <ProjectHeader
        title="Contact me"
        content="It's possible that you're here because you're interested in my work and background. That alone is greatly appreciated. This page is provided for those who may want to know more about me, make job proposals, or simply exchange greetings."
      />{" "}
      {/* <div className="projects-layout">
        <div className="cardAll">
          {cards.map((card) => (
            <div key={card}>
              <AboutCard />{" "}
            </div>
          ))}
        </div>
      </div> */}
      <div className="projects-layout">
        <div className="cardAll">
          <AboutCard />
        </div>
      </div>
      <div className="footerBar">
        <Footer
          options={[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/projects", label: "Projects" },
            { path: "/uses", label: "Uses" },
          ]}
        />
      </div>
    </div>
  );
}
