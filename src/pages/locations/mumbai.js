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
  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
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
        <div>{`mumbai`}</div>
      </Layout>
    </>
  );
};

// {response.allContentfulContentType.nodes.map((item, index) => {
//   return (
//     <React.Fragment key={index}>
//       <Link to={`/models/${item.name}`}>
//         {" "}
//         <FormControlLabel
//           value={item.name}
//           control={<Radio />}
//           label={item.name}
//         />{" "}
//       </Link>
//     </React.Fragment>
//   );
// })}

// const response = useStaticQuery(
//   graphql`
//       query {
//         allContentfulContentType {
//           nodes {
//             name
//           }
//         }
//       }
//     `
// );
