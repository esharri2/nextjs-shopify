import Header from "./Header";
import Logo from "./Logo";
import ShopNavigation from "./ShopNavigation";
import theme from "../styles/theme";
import UtilityNavigation from "./UtilityNavigation";

export default function Layout({ children, layoutData }) {
  const { collections, pages, shop } = layoutData;
  return (
    <div className="container">
      <Header>
        <ShopNavigation collections={collections} />
        <Logo>{shop.name}</Logo>
        <UtilityNavigation />
      </Header>
      {children}
      <style jsx>{`
        .container {
          padding-top: ${theme.spacing.xl};
        }
      `}</style>
    </div>
  );
}
