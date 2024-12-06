import { ReactElement, ReactNode } from "react";
import "./twoColumnsLayout.styles.css";

type TwoColumnsLayoutProps = {
  children: ReactNode;
  secondColumnContent: ReactNode;
};

const TwoColumnsLayout = ({
  children: firstColumnContent,
  secondColumnContent,
}: TwoColumnsLayoutProps): ReactElement<TwoColumnsLayoutProps> => (
  <div className="twoColumnsLayout__wrapper">
    <div className="twoColumnsLayout__first-column">{firstColumnContent}</div>

    <div className="twoColumnsLayout__second-column">{secondColumnContent}</div>
  </div>
);

export default TwoColumnsLayout;
