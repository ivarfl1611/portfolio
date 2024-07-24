import Navbar from "../components/Navbar/Navbar";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import Footer from "@/components/Footer/Footer";
import ArticleWork from "@/components/ArticleWork/ArticleWork";
import jala from "@/components/ArticleWork/icons/jalasoft_logo.jpeg";
import jalaU from "@/components/ArticleWork/icons/jalaU.jpeg";
import dh from "@/components/ArticleWork/icons/dhLogo.jpeg";
import ensign from "../components/ArticleWork/icons/ensign_college_slc_logo.jpeg";
import SignupWidget from "@/components/WigetSignup/SignupWidget";
import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import profileIcon from "../components/ProfileHeader/ProfileIcon/Ivar.jpg";
import SkillsWidget from "@/components/SkillsWidgets/SkillsWidgets";
import htmlIcon from "@/components/SkillsWidgets/icons/html5.png";
import cssIcon from "@/components/SkillsWidgets/icons/css3.png";
import javascriptIcon from "@/components/SkillsWidgets/icons/javaScript.png";
import Switcher from "@/components/Switcher/Switcher";

const articles = [
  {
    date: "Nov 15, 2021",
    title: "Everything you need to know about React",
    content:
      "The ability to build stuff in React is one of the hottest skills to have today in software engineering. There is a lot of demand for React developers among startups as well as MNCs.",
    link: "https://medium.com/the-research-nest/everything-you-need-to-know-about-react-ab24da4275ea",
  },
  {
    date: "Jan 4, 2024",
    title: "How to learn React step-by-step",
    content:
      "A software developer should learn React because it's widely used for building dynamic user interfaces, offers efficient development with its component-based approach, and enhances job opportunities due to its popularity in the industry.",
    link: "https://www.freecodecamp.org/news/how-to-learn-react-step-by-step/",
  },
  {
    date: "Sep 2, 2020",
    title: "The Missing Introduction to React",
    content:
      "React is the world’s most popular JavaScript framework, but it’s not cool because it’s popular. It’s popular because it’s cool. Most React introductions jump right into showing you examples of how to use React, and skip the “why”.",
    link: "https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76",
  },
];
const works = [
    { name: "Ensig College", icon: ensign, startYear: 2024, endYear: "Present" },
    { name: "Jala University", icon: jalaU, startYear: 2023, endYear: 2023 },
    { name: "Jalasoft", icon: jala, startYear: 2019, endYear: 2023 },
    { name: "Digital Harbor", icon: dh, startYear: 2017, endYear: 2019 },
    { name: "Jalasoft", icon: jala, startYear: 2011, endYear: 2017 },
];
const skills = [
  { name: "HTML", proficiency: 60, icon: htmlIcon },
  { name: "CSS", proficiency: 50, icon: cssIcon },
  { name: "JavaScript", proficiency: 75, icon: javascriptIcon },
];
// >>>>>>> 54bdfa288e55094ea02f17b3eb14243f340e64e5
export default function Home() {
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
      {/* <Switcher darkClassName="dark-mode" /> */}
      <div className="profile-header-container">
        <ProfileHeader
          name="Software engineer"
          bio="Successful Software Quality Assurance Engineer bringing 10+ years of experience and diligence to handle the needs of large and complex products. Solid history in both manual and automated testing. Looking to apply my expertise in a growth-oriented, dynamic position."
          linkedinUrl="https://www.linkedin.com/in/ivarfuentes/"
          imageUrl={profileIcon} // Pass the imported profile icon image as a prop
        />
      </div>
      <div className="footerContainer">
        <div className="mainCard">
          <div className="articles">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                date={article.date}
                title={article.title}
                content={article.content}
                link={article.link}
              />
            ))}
          </div>
          <div className="rightSidebar">
            <SignupWidget
              title={"Stay up to date"}
              content={
                "Get notified when I publish something new, and unsubscribe at any time."
              }
            />
            <ArticleWork
              title={"Work"}
              content={
                "I have experience working as a QA Engineer, Scrum Master, Team lead and Teacher Assistant for various companies and Universities, providing outsourcing services to different clients."
              }
              items={works}
            />
            <SkillsWidget
              title={"Skills"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."
              }
              skills={skills}
            />
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
    </div>
  );
}
