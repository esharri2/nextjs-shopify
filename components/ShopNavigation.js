import ShopLinkList from "./ShopLinkList";
import theme from "../styles/theme";
import { useState } from "react";

export default function Navigation({ collections }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <nav>
        <button
          aria-haspopup="true"
          aria-expanded={isExpanded}
          onClick={handleClick}>
          Menu
        </button>
        {isExpanded && <ShopLinkList collections={collections} />}
      </nav>
    </div>
  );
}
