import theme from "../styles/theme";

export default function Header({ children }) {
  return (
    <header>
      {children}
      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1rem;
          position: absolute;
          height: ${theme.spacing.xl};
          top: 0;
          left: 0;
          right: 0;
          border-bottom: solid 1px gray;
        }
      `}</style>
    </header>
  );
}
