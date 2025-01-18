import { ReactElement, ReactNode } from "react";
import styles from "./container.module.css";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({
  children,
}: ContainerProps): ReactElement<ContainerProps> => (
  <div className={styles.positionWrapper}>
    <div className={styles.content}>{children}</div>
  </div>
);

export default Container;
