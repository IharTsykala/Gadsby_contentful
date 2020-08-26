import React from "react";
import { Box, Toolbar } from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/layout/layout";
import Container from "@material-ui/core/Container";
import CardCategory from "../../components/card-category/card-category";
import departmentsData from "../../services/departmentsData";

export default () => {
  // const response = useStaticQuery(
  //   graphql`
  //     query {
  //       allContentfulContentType {
  //         nodes {
  //           name
  //         }
  //       }
  //     }
  //   `
  // );
  // console.log(response.allContentfulContentType.nodes);
  return (
    <>
      <Layout>
        <Box className={"list-category-container"} component={"ul"}>
          {departmentsData.map((item, index) => (
            <CardCategory key={index} name={item.title} />
          ))}
        </Box>
      </Layout>
    </>
  );
};
