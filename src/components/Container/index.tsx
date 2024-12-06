import { ReactElement, ReactNode } from "react";
import "./container.styles.css";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({
  children,
}: ContainerProps): ReactElement<ContainerProps> => (
  <div className="container__position-wrapper">
    <div className="container__content">{children}</div>
  </div>
);

export default Container;
