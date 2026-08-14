import type { MetadataRoute } from "next";

/**
 * Concept mode: noindex / nofollow.
 * Do not enable indexing until siteMode is switched to "official" after
 * explicit management authorization.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
