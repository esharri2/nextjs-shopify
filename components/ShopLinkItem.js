import { useState } from "react";

export default function ShopLinkItem({ products }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <button onClick={handleClick}>show sub menu</button>
      {isExpanded && (
        <ul>
          {products.map(({ node }) => (
            <li key={node.id}>
              <a href={node.handle}>{node.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
