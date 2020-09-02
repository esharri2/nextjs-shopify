import { get } from "./fetchUtils";

export default async function getGlobalData() {
  const data = await get(
    `
{
  collections(first: 100) {
    edges {
      node {
        id
        title
        descriptionHtml
        handle
        products(first: 100) {
          edges {
            node {
              id
              title
              descriptionHtml
              handle
              images(first:1) {
                edges {
                  node {
                    id
                    transformedSrc(maxWidth: 800)
                    originalSrc
                  }
                }
              }
              
            }
          }
        }
      }
    }
  }
  shop {
    name
  }
  pages(first: 100) {
    edges {
      node {
        id
        title
      }
    }
  }
} 
    `
  );

  return {
    props: {
      collections: data?.collections.edges,
      pages: data?.pages.edges,
      shop: data.shop,
    },
  };
}
