import { ReactElement } from "react";
import TwoColumnsLayout from "@/components/TwoColumnsLayout/TwoColumnsLayout";
import SinglePostPlaceholder from "@/components/SinglePostPlaceholder";

const LoadingSinglePost = (): ReactElement => (
  <TwoColumnsLayout secondColumnContent={null}>
    <SinglePostPlaceholder />
  </TwoColumnsLayout>
);

export default LoadingSinglePost;
