import React from "react";
import Link from "next/link";
import Head from "next/head";

function CustomNotFound() {
  return (
    <div className="w-full flex flex-col items-center text-center pt-10">
      <Head>
        <title>page not found</title>
      </Head>
      <h1>page not found !</h1>
      <Link className="text-primary" href="/">
        go to home page
      </Link>
    </div>
  );
}

export default CustomNotFound;
