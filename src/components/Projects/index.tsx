import { projects } from "../../data/projectsData";
import * as S from "./styles";
import { ProjectCard } from "./ProjectCard";
import { Caroussel, CreateCardsCarousel } from "./Carousel";
import { ThemeTitle } from "../../styles/typography";

export function Project() {
  return (
    <S.Section id="projects">
      <ThemeTitle fontSize="md" tag="h3">
        Projetos
      </ThemeTitle>
      <Caroussel
        cards={CreateCardsCarousel(projects)}
        offset={2}
        showArrows={false}
      />
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
