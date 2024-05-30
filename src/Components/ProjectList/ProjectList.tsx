import { useAppSelector } from "../../hooks/redux";
import ProjectItem from "../UI/ProjectItem/ProjectItem";
import "./ProjectList.css";

export default function ProjectList() {
  const {
    myProjectsTitle,
    dataMolaDescr,
    itlogyDescr,
    webshopDescr,
    shelterDescr,
    contraDescr,
  } = useAppSelector((state) => state.langReducer.lang);
  const myProjectsArr = [
    {
      description: webshopDescr,
      src: "./WebShop.png",
      url: "https://storied-gnome-cbc643.netlify.app/",
    },
    {
      description: shelterDescr,
      src: "./shelter.png",
      url: "https://kolyavol.github.io/Shelter/",
    },
    {
      description: itlogyDescr,
      src: "./ItLogy.png",
      url: "https://kolyavol.github.io/car-hw/",
    },
    {
      description: contraDescr,
      src: "./contra.png",
      url: "https://kolyavol.github.io/PixiJs-Contra/",
    },
    {
      description: dataMolaDescr,
      src: "./DataMola.png",
      url: "https://kolyavol.github.io/DataMola/",
    },
    {
      description: dataMolaDescr,
      src: "./minesweeper.png",
      url: "https://kolyavol.github.io/Minesweeper/",
    },
    {
      description: dataMolaDescr,
      src: "./keyboard.png",
      url: "https://kolyavol.github.io/virtual-keyboard/",
    },
  ];
  return (
    <section className="project-list__container" id="projects">
      <h2 className="project-list__title">{myProjectsTitle}</h2>
      <div className="project-list__template">
        {myProjectsArr.map((item) => (
          <ProjectItem
            children={`${item.description}`}
            src={item.src}
            url={item.url}
            key={item.url}
          ></ProjectItem>
        ))}
      </div>
    </section>
  );
}
