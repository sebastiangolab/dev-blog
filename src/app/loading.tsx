import { ReactElement } from "react";
import TwoColumnsLayout from "@/components/TwoColumnsLayout/TwoColumnsLayout";
import PostTilePlaceholder from "@/components/PostTilePlaceholder";

const LoadingHomePage = (): ReactElement => (
  <TwoColumnsLayout secondColumnContent={null}>
    <PostTilePlaceholder />
    <PostTilePlaceholder />
    <PostTilePlaceholder />
  </TwoColumnsLayout>
);

export default LoadingHomePage;
