import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Section from "../components/Section";
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Section></Section>
      <Footer></Footer>
    </>
  );
}
