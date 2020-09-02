import theme from "../styles/theme";

export default function Logo() {
  return (
    <>
      <h1>Lorem Shopsum</h1>
      <style jsx>{`
        h1 {
          color: ${theme.colors.accent1};
          text-transform: uppercase;
          font-size: 2.5rem;
        }
      `}</style>
    </>
  );
}
