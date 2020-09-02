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
              productType              
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

  const collections = data.collections.edges;

  // Get types per collection for building shop nav
  for (let { node } of collections) {
    const products = node.products.edges;
    const types = [];
    for (let { node: product } of products) {
      types.push(product.productType);
    }
    node.types = [...new Set(types)];
  }

  return {
    props: {
      collections,
      pages: data?.pages.edges,
      shop: data.shop,
    },
  };
}
