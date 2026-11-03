// Editable site data lives in src/data/*.yml. Each file is validated here at build time,
// so a typo in a field name fails the build with a clear message instead of rendering blank.
import { z } from 'astro/zod';
import banner from '../data/banner.yml';
import news from '../data/news.yml';
import about from '../data/about.yml';
import services from '../data/services.yml';
import team from '../data/team.yml';
import portfolio from '../data/portfolio.yml';
import testimonials from '../data/testimonials.yml';
import youtube from '../data/youtube.yml';

const text = z.coerce.string();

export const bannerData = z
  .object({
    slides: z.array(text).min(1),
    title: text,
    content: text,
    button: z.object({ label: text, link: text }),
  })
  .parse(banner);

export const newsData = z.array(z.object({ date: text, content: text })).parse(news);

export const aboutData = z.object({ title: text, paragraphs: z.array(text) }).parse(about);

export const servicesData = z.array(z.object({ name: text, content: text })).parse(services);

export const teamData = z
  .array(z.object({ name: text, image: text, title: text, items: z.array(text).default([]) }))
  .parse(team);

export const portfolioData = z
  .array(z.object({ name: text, image: text, category: text, note: text.optional() }))
  .parse(portfolio);

export const testimonialsData = z
  .array(z.object({ name: text, role: text.default(''), image: text, paragraphs: z.array(text) }))
  .parse(testimonials);

export const youtubeData = z.array(z.object({ title: text, id: text })).parse(youtube);
