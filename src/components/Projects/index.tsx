import { ThemeTitle } from "../../styles/typography";
import { projects } from "../../data/projectsData";
import * as S from "./styles";
import { ProjectCard } from "./ProjectCard";

export function Project() {
  return (
    <S.Section>
      <ThemeTitle fontSize="md" tag="h3">
        Projetos
      </ThemeTitle>
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
