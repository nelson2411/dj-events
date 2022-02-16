import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "@/styles/Layout.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Showcase from "../showcase/Showcase";

const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="{description}" />
        <meta name="keywords" content="{keywords}" />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "DJ Events | Find the hottest parties",
  description: "Finde the latest DJ and other musical events",
  keywords: "music, dj, edm, events, serato, pioneer",
};

export default Layout;
