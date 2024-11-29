import { ReactElement, ReactNode } from "react";
import "./container.styles.css";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({
  children,
}: ContainerProps): ReactElement<ContainerProps> => (
  <div className="position-wrapper">
    <div className="content">{children}</div>
  </div>
);

export default Container;
