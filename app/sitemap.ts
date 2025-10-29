import { MetadataRoute } from "next";

export const rootUrl = 'https://adeblessing.com'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
      {
        url: rootUrl,
        lastModified: new Date()
      },
      {
        url: `${rootUrl}/about`,
        lastModified: new Date()
      },
      {
        url: `${rootUrl}/contact`,
        lastModified: new Date()
      },
      {
        url: `${rootUrl}/services`,
        lastModified: new Date()
      },
    ]
  }