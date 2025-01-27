import { ReactElement } from "react";
import Image from "next/image";
import javaScriptIcon from "@/icons/javascript-icon.svg";
import nextJsIcon from "@/icons/nextjs-icon.svg";
import reactIcon from "@/icons/react-icon.svg";
import webDevIcon from "@/icons/web-dev-icon.svg";

type CategoryElementProps = {
  categoryName: string;
};

const categoriesData = [
  {
    name: "JavaScript",
    icon: javaScriptIcon,
    iconAlt: "JavaScript icon",
  },
  {
    name: "React",
    icon: reactIcon,
    iconAlt: "React icon",
  },
  {
    name: "React Native",
    icon: reactIcon,
    iconAlt: "React Native icon",
  },
  {
    name: "NextJS",
    icon: nextJsIcon,
    iconAlt: "NextJS icon",
  },
  {
    name: "Web development",
    icon: webDevIcon,
    iconAlt: "Web development icon",
  },
];

const CategoryElement = ({
  categoryName,
}: CategoryElementProps): ReactElement<CategoryElementProps> | null => {
  const activeCategoryElement = categoriesData.find(
    (categoryData) => categoryData.name === categoryName,
  );

  if (!activeCategoryElement) {
    return null;
  }

  return (
    <>
      <Image
        priority
        src={activeCategoryElement.icon}
        alt={activeCategoryElement.iconAlt}
        width={25}
        height={25}
      />

      <p>{categoryName}</p>
    </>
  );
};

export default CategoryElement;
