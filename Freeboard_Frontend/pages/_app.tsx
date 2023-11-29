import { AppProps } from "next/app";
import "../styles/globals.css";
import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout/layout";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloSetting>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloSetting>
  );
}
export default MyApp;
