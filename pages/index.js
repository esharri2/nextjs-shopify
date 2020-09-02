import getGlobalData from "../utils/getGlobalData";
import Layout from "../components/Layout";

export default function Home(props) {
  return (
    <Layout layoutData={props}>
      <h1>home page!</h1>
    </Layout>
  );
}

/**
 * TODO this needs to be added to every page, since getStaticProps only works at the page level
 * Need to figure out how to do it at components or at a global level.
 */

export async function getStaticProps() {
  const props = await getGlobalData();
  return props;
}
