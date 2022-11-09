interface iProjects {
  name: string;
  image: string;
  vercelLink: string;
  githubLink: string;
}

export function ProjectCard({
  name,
  image,
  vercelLink,
  githubLink,
}: iProjects) {
  return (
    <div>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p>{name}</p>
    </div>
  );
}
