import Carousel from "react-spring-3d-carousel";
import { useState, useEffect, ReactNode } from "react";
import { config } from "react-spring";
import * as S from "./styles";
import { iProject } from "../../../data/projectsData";
import { ProjectCard } from "../ProjectCard";

interface iCard {
  key: number;
  content: ReactNode;
}

interface iCaroussel extends Carousel {
  cards: iCard[];
  offset: number;
  showArrows: boolean;
}

export function Caroussel(props: iCaroussel) {
  const table = props.cards.map((element: iCard, index: number) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState<number>(4);
  const [showArrows, setShowArrows] = useState<boolean>(false);
  const [goToSlide, setGoToSlide] = useState<number | undefined>(undefined);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <S.Div>
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </S.Div>
  );
}

export function CreateCardsCarousel(projects: iProject[]) {
  let cards = projects.map((item: iProject, index: number) => {
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
}
