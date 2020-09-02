export default function UtilityNavigation() {
  const utilityNavItems = [
    { title: "About", path: "/about" },
    { title: "Blog", path: "/blog" },
  ];

  return (
    <nav>
      <ul>
        {utilityNavItems.map((item) => (
          <li key={item.path}>
            <a href={item.path}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
