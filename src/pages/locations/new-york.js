import React from "react";
import { Toolbar } from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/layout/layout";

export default () => {
  const response = useStaticQuery(
    graphql`
      query {
        allContentfulContentType {
          nodes {
            name
          }
        }
      }
    `
  );
  console.log(response);
  return (
    <>
      <Layout>
        <div>{`newyork`}</div>
      </Layout>
    </>
  );
};
