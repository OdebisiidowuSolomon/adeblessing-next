import type { MetadataRoute } from 'next'
import { rootUrl } from './sitemap'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/about', '/contact', '/services'],
      disallow: [],
    },
    sitemap: `${rootUrl}/sitemap.xml`,
  }
}