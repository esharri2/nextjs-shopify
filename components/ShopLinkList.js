import ShopLinkItem from "./ShopLinkItem";
import theme from "../styles/theme";
import { useState } from "react";

export default function ShopLinkList({ collections, style, key }) {
  return (
    <ul style={style} key={key}>
      {collections.map(({ node: collection }) => (
        <ShopLinkItem collection={collection} />
      ))}
      <style jsx>{`
        ul {
          background-color: ${theme.colors.light};
          position: absolute;
          top: ${theme.spacing.xl};
          left: 0;
          right: 0;
          margin: 0;
          padding: 1rem;
          list-style-type: none;
        }
      `}</style>
    </ul>
  );
}
