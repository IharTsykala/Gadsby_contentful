import React from "react";
import Header from "../header/header";
import Container from "@material-ui/core/Container";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container component={"main"}>{children}</Container>
    </>
  );
};

export default Layout;
