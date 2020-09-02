// Utilities for GraphQL queries and mutations on Shopify Storefront API

import fetch from "node-fetch";

const API_URL = "https://lorem-shopsum.myshopify.com/api/2019-07/graphql";

export async function get(query) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": process.env.ACCESS_TOKEN,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}
