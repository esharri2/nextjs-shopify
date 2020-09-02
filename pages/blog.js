import { get } from "../utils/fetchUtils";

export default function Blog({ articles }) {
  return (
    <ul>
      {articles.map(({ node }) => (
        <li>{node.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const data = await get(
    `{
      articles(first: 100) {
        edges {
        node {
          id
          title
            }
        }
      }
    }`
  );

  return {
    props: {
      articles: data?.articles?.edges,
    },
  };
}
