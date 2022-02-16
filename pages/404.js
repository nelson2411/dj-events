import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import styles from "@/styles/404.module.css";

const NotFoundpage = () => {
  return (
    <Layout title="Page not found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle />
          404
        </h1>
        <h4>Sorry, the page was not found</h4>
        <Link href="/">Go Back Home</Link>
      </div>
    </Layout>
  );
};

export default NotFoundpage;
