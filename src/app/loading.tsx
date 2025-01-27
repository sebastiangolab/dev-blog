import { ReactElement } from "react";
import PostsTilesPlaceholders from "@/components/PostsTilesPlaceholders";
import TwoColumnsLayout from "@/components/TwoColumnsLayout/TwoColumnsLayout";

const LoadingHomePage = (): ReactElement => (
  <TwoColumnsLayout secondColumnContent={null}>
    <PostsTilesPlaceholders />
  </TwoColumnsLayout>
);

export default LoadingHomePage;
