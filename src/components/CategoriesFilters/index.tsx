"use client";

import React, { ReactElement, useContext, useEffect, useState } from "react";
import { CategoryData } from "@/actions/getCategories";
import { usePageParams } from "@/hooks/usePageParams";
import { LoadingPostsStateContext } from "@/providers/LoadingPostsStateProvider";
import styles from "./categoriesFilters.module.css";

type CategoriesFiltersProps = {
  categories: CategoryData[];
};

const CategoriesFilters = ({
  categories,
}: CategoriesFiltersProps): ReactElement<CategoriesFiltersProps> => {
  const [activeStateCategory, setActiveStateCategory] = useState<string | null>(
    null,
  );

  const { isPostsLoading, setIsPostsLoading } = useContext(
    LoadingPostsStateContext,
  );

  const { getParam, setParam, deleteParam, setUrlParams } = usePageParams();

  const activeCategoryParam = getParam("category");

  const setCategoryParam = (categorySlug: string | null) => {
    if (categorySlug) {
      setParam("category", categorySlug);
    } else {
      deleteParam("category");
    }

    setUrlParams();
  };

  const handleOnClick = (categorySlug: string | null) => {
    setIsPostsLoading(true);

    setCategoryParam(categorySlug);
    setActiveStateCategory(categorySlug);
  };

  useEffect(() => {
    if (activeCategoryParam) {
      setActiveStateCategory(activeCategoryParam);
    }
  }, [activeCategoryParam]);

  const commonStyleClasses = `${styles.category} ${isPostsLoading ? styles.disable : ""}`;

  const currentActiveCategory =
    activeStateCategory || (isPostsLoading ? null : activeCategoryParam);

  return (
    <div className={styles.wrapper}>
      <div
        className={`${commonStyleClasses}  ${currentActiveCategory === null ? styles.active : ""}`}
        onClick={isPostsLoading ? undefined : () => handleOnClick(null)}
      >
        All
      </div>

      {categories.map(({ name, slug }) => (
        <div
          key={slug}
          className={`${commonStyleClasses}  ${currentActiveCategory === slug ? styles.active : ""}`}
          onClick={isPostsLoading ? undefined : () => handleOnClick(slug)}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default CategoriesFilters;
