import ShopLinkList from "./ShopLinkList";
import theme from "../styles/theme";
import { useState } from "react";
import Icon from "./Icon";
import MenuSVG from "../media/icons/menu.svg";
import { useTransition, animated } from "react-spring";

const AnimatedShopLinkList = animated(ShopLinkList);

export default function Navigation({ collections }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const transitions = useTransition(isExpanded, null, {
    from: { transform: "translateX(-100vw)" },
    enter: { transform: "translateX(0)" },
    leave: { transform: "translateX(-100vw)" },
  });

  return (
    <div>
      <nav>
        <button
          aria-haspopup="true"
          aria-expanded={isExpanded}
          onClick={handleClick}>
          <Icon>
            <MenuSVG />
          </Icon>
        </button>
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <AnimatedShopLinkList
                key={key}
                style={props}
                collections={collections}
              />
            )
        )}

        {/* {isExpanded && (
          <AnimatedShopLinkList style={props} collections={collections} />
        )} */}
      </nav>
      <style jsx>{`
        button {
          background-color: transparent;
          border: none;
          width: 3rem;
        }

        button:hover,
        button:focus {
          outline: none;
          fill: ${theme.colors.accent1};
        }
      `}</style>
    </div>
  );
}
