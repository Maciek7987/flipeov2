import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Section from "../components/Section";
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Flipeo</title>
      </Head>
      <div className="wrapperToOverflow">
        <Header></Header>
        <Main></Main>
        <Section></Section>
        <Footer></Footer>
      </div>
    </>
  );
}
