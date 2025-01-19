import { MetadataRoute } from "next";
import getPosts from "@/actions/getPosts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.SITE_URL || "";

  const links = [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
  ];

  const posts = await getPosts(10000);

  posts.forEach((post) => {
    links.push({
      url: `${siteUrl}${post.slug}`,
      lastModified: new Date(post.modified),
    });
  });

  return links;
}
