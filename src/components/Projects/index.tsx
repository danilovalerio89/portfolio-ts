import { projects } from "../../data/projectsData";
import * as S from "./styles";
import { ProjectCard } from "./ProjectCard";
import { Caroussel } from "./Carousel";
import { ThemeTitle } from "../../styles/typography";

export function Project() {
  const createCards = (projects: any) => {
    let cards = projects.map((item: any, index: any) => {
      return {
        key: index,
        content: (
          <ProjectCard
            key={index}
            name={item.name}
            image={item.image}
            githubLink={item.githubLink}
            vercelLink={item.vercelLink}
            description={item.description}
            tecs={item.tecs}
          />
        ),
      };
    });
    return cards;
  };

  return (
    <S.Section>
      <ThemeTitle fontSize="md" tag="h3">
        Projetos
      </ThemeTitle>
      <Caroussel cards={createCards(projects)} offset={2} showArrows={false} />
      <S.BoxProjects>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            image={project.image}
            githubLink={project.githubLink}
            vercelLink={project.vercelLink}
            description={project.description}
            tecs={project.tecs}
          />
        ))}
      </S.BoxProjects>
    </S.Section>
  );
}
