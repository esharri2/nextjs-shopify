import ChevronDownSVG from "../media/icons/chevron-down.svg";
import Icon from "./Icon";
import slugify from "../utils/slugify";
import theme from "../styles/theme";
import { useState } from "react";

export default function ShopLinkItem({ collection }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li key={collection.title}>
      <div>
        <a href={collection.handle}>{collection.title}</a>
        {collection.types.length > 0 ? (
          <button
            onClick={handleClick}
            aria-haspopup="true"
            aria-expanded={isExpanded}>
            <Icon width={theme.spacing.lg} rotate={isExpanded}>
              <ChevronDownSVG />
            </Icon>
          </button>
        ) : null}
      </div>
      {isExpanded && (
        <ul>
          {collection.types.map((type) => (
            <li>
              <a href={slugify(type)}>{type}</a>
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        div {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        div a {
          font-size: ${theme.fontSize.md};
          text-transform: uppercase;
        }

        button {
          flex-grow: 1;
          display: flex;
          justify-content: flex-end;
        }

        button:hover,
        button:focus {
          outline: none;
          fill: ${theme.colors.accent1};
        }

        li {
          padding: 1rem;
          border-bottom: 1px solid ${theme.colors.middle};
        }

        ul {
          padding: 0;
        }

        li li {
          border-bottom: none;
          list-style-type: none;
          padding-left: ${theme.spacing.md};
        }
      `}</style>
    </li>
  );
}
