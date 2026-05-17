import { MetadataRoute } from 'next';
import { SERVICES_DATA } from '@/lib/services-data';
import { BLOG_POSTS } from '@/lib/blog-data';
import { publicConfig } from '@/lib/env';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = publicConfig.siteUrl;

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/smile-gallery',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const serviceRoutes = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
