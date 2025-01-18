import React, { ReactElement, useEffect, useRef } from "react";
import styles from "./overlay.module.css";

type OverlayProps = {
  onClickOutside: () => void;
};

const Overlay = ({
  onClickOutside,
}: OverlayProps): ReactElement<OverlayProps> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOnClick = (event: MouseEvent) => {
      if (
        ref &&
        ref.current &&
        !ref.current.contains(event.currentTarget as Node)
      ) {
        onClickOutside();
      }
    };

    document.addEventListener("click", handleOnClick);

    return () => {
      document.removeEventListener("click", handleOnClick);
    };
  }, [ref]);

  return <div ref={ref} className={styles.overlay}></div>;
};

export default Overlay;
