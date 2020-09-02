export default function Icon({ children, rotate, width = "100%" }) {
  return (
    <div>
      {children}

      <style jsx>{`
        div {
          width: ${width};
          transition: transform 0.2s;
        }
      `}</style>
      <style jsx>{`
        div {
          transform: ${rotate ? "rotate(180deg)" : "none"};
        }
      `}</style>
    </div>
  );
}
