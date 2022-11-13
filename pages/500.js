import React from "react";
import Head from "next/head";

function CustomServerError() {
  return (
    <div className="w-full pt-10">
      <Head>
        <title>server error</title>
      </Head>
      <h1 className="text-center w-full">server error</h1>
    </div>
  );
}

export default CustomServerError;
