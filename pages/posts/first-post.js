import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "src/components/layout";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post!</title>
      </Head>
      <h1>First Post!!!!!</h1>

      <h2>
        <Link href="/">
          <a>Back to home!!!</a>
        </Link>
      </h2>
    </Layout>
  );
};

export default FirstPost;
