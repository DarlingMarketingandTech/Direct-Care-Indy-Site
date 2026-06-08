/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://direct-care-indy-site.vercel.app",
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  exclude: ["/welcome"],
  changefreq: "weekly",
  priority: 0.7,
};
