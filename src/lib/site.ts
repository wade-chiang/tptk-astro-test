import { getCollection, type CollectionEntry } from 'astro:content';

export const site = {
  name: '厝邊頭家物理治療所',
  title: '台北．中山．厝邊頭家物理治療所',
  description:
    '來厝邊，當自己身體的頭家 - 一對一自費專業物理治療、疼痛、中風、術後復健，上下肢關節疼痛 脊椎疼痛 銀髮物理治療 運動傷害物理治療',
  logo: 'https://img.tptk.com.tw/tptk-logo-dark-01.png',
  ogImage: 'https://img.tptk.com.tw/banner-bg01.webp',
  gaId: 'G-5LQP2C5J8Z',
  address: '台北市中山區新生北路二段47號一樓',
  phone: '+886 02-2537-2293',
  phoneHref: 'tel:+886225372293',
  email: 'pt@tptk.com.tw',
  lat: 25.05597986054194,
  lng: 121.52822416838313,
  formAction: 'https://consult-api.tptk.com.tw/post_json',
  facebook: 'https://www.facebook.com/TshuPinnThauKePhysicalTherapy',
  youtube: 'https://www.youtube.com/c/厝邊頭家TshùPinnThâuKe',
  bookingHref: '/#contact',
  nav: [
    { label: '服務項目', href: '/services/' },
    { label: '治療團隊', href: '/team/' },
    { label: '圖片集', href: '/portfolio/' },
    { label: 'YouTube頻道', href: '/videos/' },
    { label: '專業文章', href: '/blog/' },
  ],
};

const taipei = (d: Date, opt: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Taipei', ...opt }).format(d);

/** Keep the old Hugo permalink: /:year/:month/:filename/ */
export const postUrl = (p: CollectionEntry<'blog'>) =>
  `/${taipei(p.data.date, { year: 'numeric' })}/${taipei(p.data.date, { month: '2-digit' })}/${p.id}/`;

export const postDate = (p: CollectionEntry<'blog'>) =>
  taipei(p.data.date, { year: 'numeric', month: '2-digit', day: '2-digit' });

export async function getPosts() {
  const posts = await getCollection('blog', (p) => !p.data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
