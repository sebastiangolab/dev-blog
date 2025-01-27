import { Metadata } from "next";
import { notFound } from "next/navigation";
import getSinglePost from "@/actions/getSinglePost";
import ContentsList from "@/components/ContentsList";
import SinglePost from "@/components/SinglePost";
import TwoColumnsLayout from "@/components/TwoColumnsLayout/TwoColumnsLayout";
import getH2Texts from "@/helpers/getH2Texts";

type Params = {
  postSlug: string;
};

type PostPageProps = {
  params: Promise<Params>;
};

type ExtendedMetadata = Metadata & {
  structuredData?: Record<string, unknown>;
};

export async function generateMetadata({
  params,
}: PostPageProps): Promise<ExtendedMetadata> {
  const { postSlug } = await params;

  const postData = await getSinglePost(postSlug);

  if (!postData) {
    return {};
  }

  const strippedExcerpt = postData.excerpt.replace(/(<([^>]+)>)/gi, "");

  const featuredImageLink = postData?.featuredImage?.link;

  return {
    title: `${postData.title} | ImDevBlog`,
    description: strippedExcerpt,
    openGraph: {
      title: `${postData.title} | ImDevBlog`,
      description: strippedExcerpt,
      images: featuredImageLink
        ? [
            {
              url: featuredImageLink,
              width: 800,
              height: 600,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
    },
    structuredData: {
      "@context": process.env.SITE_URL,
      "@type": "Article",
      headline: postData.title,
      datePublished: postData.date,
      author: {
        "@type": "Person",
        name: postData.author,
      },
    },
  };
}

const PostPage = async ({ params }: PostPageProps) => {
  const { postSlug } = await params;

  const postData = await getSinglePost(postSlug);

  if (!postData) {
    return notFound();
  }

  const contentH2Titles = getH2Texts(postData.content);

  return (
    <TwoColumnsLayout
      secondColumnContent={<ContentsList contentH2Titles={contentH2Titles} />}
    >
      <SinglePost {...postData} />
    </TwoColumnsLayout>
  );
};

export default PostPage;
