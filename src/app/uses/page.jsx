import UsesHeader from "@/components/UsesHeader/UsesHeader";
import UsesSection from "@/components/UsesComponent/UseSection/UsesSection";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
export const metadata = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};
const items = [
  {
    groupName: "Workstation",
    items: [
      {
        title: "16” MacBook Pro, M1 Max, 64GB RAM (2022)",
        description:
          "I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations.",
      },
      {
        title: "Dell UltraSharp U2717D",
        description:
          "I have two of these monitors and they’re great. I’ve had them for years and they’ve been rock solid.",
      },
      {
        title: "Keychron K2",
        description:
          "I’ve been using this keyboard for a few years now and I love it. It’s wireless, has a great feel, and the battery lasts forever.",
      },
      {
        title: "Logitech MX Master 3",
        description:
          "I’ve been using this mouse for a few years now and it’s great. It’s wireless, has a great feel, and the battery lasts forever.",
      },
      {
        title: "Audio-Technica ATH-M50x",
        description:
          "I’ve been using these headphones for a few years now and they’re great. They’re comfortable, sound good, and are built like a tank.",
      },
      {
        title: "Rain Design mStand",
        description:
          "I’ve been using this stand for my MacBook Pro for a few years now and it’s great. It’s sturdy, looks good, and keeps my laptop cool.",
      },
    ],
  },
  {
    groupName: "Development",
    items: [
      {
        title: "Visual Studio Code",
        description:
          "I use VS Code for all of my development work. It’s fast, has great extensions, and is highly customizable.",
      },
      {
        title: "iTerm2 + Oh My Zsh",
        description:
          "I use iTerm2 as my terminal and Oh My Zsh as my shell. It’s a great combination. I use the Agnoster theme with the Fira Code font.",
      },
    ],
  },
  {
    groupName: "Design",
    items: [
      {
        title: "Figma",
        description:
          "I use Figma for all of my design work. It’s fast, has great collaboration features, and is highly customizable.",
      },
      {
        title: "Whimsical",
        description:
          "I use Whimsical for all of my wireframing and flowcharting. It’s fast, has great collaboration features, and is highly customizable.",
      },
    ],
  },
  {
    groupName: "Productivity",
    items: [
      {
        title: "Notion",
        description:
          "I use Notion for all of my note-taking and knowledge management. It’s fast, has great collaboration features, and is highly customizable.",
      },
      {
        title: "Alfred",
        description:
          "I use Alfred for all of my productivity needs. It’s fast, has great features, and is highly customizable.",
      },
    ],
  },
];
export default function Uses() {
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
      <UsesHeader
        title="Software I use, gadgets I love, and other things I recommend."
        content= "Welcome to my digital domain! I'm passionate about sharing the tools and gadgets that fuel my productivity and creativity. From Visual Studio Code for development and Figma for design to Notion for organization, I've curated a suite of software that's fast, collaborative, and highly customizable. My workstation, boasting a 16” MacBook Pro with M1 Max, Dell UltraSharp monitors, Keychron K2 keyboard, Logitech MX Master 3 mouse, Audio-Technica ATH-M50x headphones, and Rain Design mStand, is tailored for comfort and efficiency. With Alfred enhancing my productivity, join me on this journey of exploration at the intersection of technology and creativity."
      />
      <UsesSection items={items} />
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
