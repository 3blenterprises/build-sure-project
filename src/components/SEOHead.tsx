import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: string;
}

const SITE_URL = "https://3bl-studios.com";
const SITE_NAME = "3BL Studios";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4e38298c-f70d-40e0-aae2-b33fe12a4935/id-preview-e672c856--e36374fa-a7b4-461b-ae37-b65541a57782.lovable.app-1772448910599.png";

const SEOHead = ({ title, description, path, type = "website" }: SEOHeadProps) => {
  const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:type", type);
    setMeta("property", "og:image", OG_IMAGE);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", OG_IMAGE);

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);
  }, [fullTitle, description, canonicalUrl, type]);

  return null;
};

export default SEOHead;
