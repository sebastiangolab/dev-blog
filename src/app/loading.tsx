import { ReactElement } from "react";
import TwoColumnsLayout from "@/components/TwoColumnsLayout/TwoColumnsLayout";
import PostsTilesPlaceholders from "@/components/PostsTilesPlaceholders";

const LoadingHomePage = (): ReactElement => (
  <TwoColumnsLayout secondColumnContent={null}>
    <PostsTilesPlaceholders />
  </TwoColumnsLayout>
);

export default LoadingHomePage;
