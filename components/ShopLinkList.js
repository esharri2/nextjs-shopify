import ShopLinkItem from "./ShopLinkItem";
import theme from "../styles/theme";
import { useState } from "react";

export default function ShopLinkList({ collections }) {
  return (
    <ul>
      {collections.map(({ node }) => (
        <li key={node.title}>
          <a href={node.handle}>{node.title}</a>
          {node.products.edges.length > 0 ? (
            <ShopLinkItem products={node.products.edges} />
          ) : (
            <p>[empty]</p>
          )}
        </li>
      ))}
      <style jsx>{`
        ul {
          background-color: pink;
          position: absolute;
          top: ${theme.spacing.xl};
          left: 0;
          right: 0;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </ul>
  );
}
