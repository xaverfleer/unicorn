import * as React from "react";
import Helmet from "react-helmet";

import narwhal from "../images/narwhal.png";

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Narwhals rock</title>
        <meta name="description" content="Narwhal is the new Unicorn" />
      </Helmet>
      <main
        style={{
          alignItems: "center",
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          margin: "0",
        }}
      >
        <title>Narwahl</title>
        <img
          alt="Narwhal is the new Unicorn"
          src={narwhal}
          style={{ maxHeight: "300px" }}
        />
      </main>
    </>
  );
};

export default IndexPage;
