import React from "react";
import Header from "../header/header";
import Box from "@material-ui/core/Box";
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

// const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)
