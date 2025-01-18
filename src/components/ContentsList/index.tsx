"use client";

import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-scroll";
import normalizeMarkdownH2Title from "@/helpers/normalizeMarkdownH2Title";
import styles from "./contentsList.module.css";

type ContentsListProps = {
  contentH2Titles: string[];
};

const ContentsList = ({
  contentH2Titles,
}: ContentsListProps): ReactElement<ContentsListProps> => {
  const [activeTitleId, setActiveTitleId] = useState<string | null>();

  const h2TitlesData = contentH2Titles.map((h2Title) => ({
    text: h2Title,
    id: normalizeMarkdownH2Title(h2Title),
  }));

  useEffect(() => {
    const h2TitlesObserver = (): void => {
      let activeTitleId = "intro";

      h2TitlesData.forEach(({ id: titleId }) => {
        const element = document.getElementById(titleId);

        if (!element) {
          return;
        }

        const elementTopOffset = element.offsetTop;

        const windowTopPosition = window.scrollY + 50;

        if (windowTopPosition >= elementTopOffset) {
          activeTitleId = titleId;
        }
      });

      setActiveTitleId(activeTitleId);
    };

    window.addEventListener("scroll", h2TitlesObserver);

    h2TitlesObserver();

    return () => {
      window.removeEventListener("scroll", h2TitlesObserver);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <Link
        className={`${styles.link} ${activeTitleId === "intro" ? styles.active : ""}`}
        to={"intro"}
        offset={-30}
        smooth
      >
        Intro
      </Link>

      {h2TitlesData.map(({ text, id }) => (
        <Link
          key={id}
          className={`${styles.link} ${activeTitleId === id ? styles.active : ""}`}
          to={id}
          offset={-30}
          smooth
        >
          {text}
        </Link>
      ))}
    </div>
  );
};

export default ContentsList;
