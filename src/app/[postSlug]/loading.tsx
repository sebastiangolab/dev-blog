import { ReactElement } from "react";
import SinglePostPlaceholder from "@/components/SinglePostPlaceholder";
import TwoColumnsLayout from "@/components/TwoColumnsLayout/TwoColumnsLayout";

const LoadingSinglePost = (): ReactElement => (
  <TwoColumnsLayout secondColumnContent={null}>
    <SinglePostPlaceholder />
  </TwoColumnsLayout>
);

export default LoadingSinglePost;
