import { useEffect } from "react";

export const SITE_URL = "https://www.k3mexcavation.com";
export const SITE_NAME = "K3M Excavation LLC";
export const BUSINESS_ID = `${SITE_URL}/#business`;
const DEFAULT_IMAGE = "/k3m_hero.jpg";

interface Breadcrumb {
  name: string;
  path: string;
}

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  breadcrumbs?: Breadcrumb[];
  schema?: object | object[];
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

const PAGE_SCHEMA_ID = "page-schema";

const PageSEO = ({ title, description, path, image = DEFAULT_IMAGE, noIndex = false, breadcrumbs, schema }: PageSEOProps) => {
  const schemaKey = JSON.stringify({ breadcrumbs, schema });

  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const imageUrl = `${SITE_URL}${image}`;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noIndex ? "noindex, follow" : "index, follow");
    upsertLink("canonical", url);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", imageUrl);

    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);

    const graph: object[] = [];
    if (breadcrumbs?.length) {
      graph.push({
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: crumb.name,
          item: `${SITE_URL}${crumb.path}`,
        })),
      });
    }
    if (schema) {
      graph.push(...(Array.isArray(schema) ? schema : [schema]));
    }

    let schemaEl = document.getElementById(PAGE_SCHEMA_ID) as HTMLScriptElement | null;
    if (graph.length) {
      if (!schemaEl) {
        schemaEl = document.createElement("script");
        schemaEl.type = "application/ld+json";
        schemaEl.id = PAGE_SCHEMA_ID;
        document.head.appendChild(schemaEl);
      }
      schemaEl.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
    } else if (schemaEl) {
      schemaEl.remove();
    }

    return () => {
      document.getElementById(PAGE_SCHEMA_ID)?.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, image, noIndex, schemaKey]);

  return null;
};

export default PageSEO;
