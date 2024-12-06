import PostsList from "@/components/PostsList";
import TwoColumnsLayout from "@/components/TwoColumnsLayout/TwoColumnsLayout";
import { ReactElement, Suspense } from "react";

const HomePage = (): ReactElement => (
  <TwoColumnsLayout secondColumnContent={null}>
    <Suspense fallback="Loadig...">
      {/* @ts-expect-error */}
      <PostsList />
    </Suspense>
  </TwoColumnsLayout>
);

export default HomePage;
