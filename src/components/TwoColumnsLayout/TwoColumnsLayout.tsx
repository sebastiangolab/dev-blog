import { ReactElement, ReactNode } from "react";
import styles from "./twoColumnsLayout.module.css";

type TwoColumnsLayoutProps = {
  children: ReactNode;
  secondColumnContent: ReactNode;
};

const TwoColumnsLayout = ({
  children: firstColumnContent,
  secondColumnContent,
}: TwoColumnsLayoutProps): ReactElement<TwoColumnsLayoutProps> => (
  <div className={styles.wrapper}>
    <div className={styles.firstColumn}>{firstColumnContent}</div>

    <div className={styles.secondColumn}>{secondColumnContent}</div>
  </div>
);

export default TwoColumnsLayout;
