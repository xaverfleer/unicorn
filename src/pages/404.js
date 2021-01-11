import * as React from "react";
import narwhal from "../images/narwhal.png";

// markup
const IndexPage = () => {
  return (
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
        alt="Narwahl is the new Unicorn"
        src={narwhal}
        style={{ maxHeight: "300px" }}
      />
    </main>
  );
};

export default IndexPage;
