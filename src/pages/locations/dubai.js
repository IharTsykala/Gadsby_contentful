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
      {" "}
      <Layout>
        <div>{`dubai`}</div>
      </Layout>
      {/*<Toolbar className={`header-container`}>*/}
      {/*  <FormControl component="fieldset">*/}
      {/*    <FormLabel component="legend">*/}
      {/*      <RadioGroup*/}
      {/*        aria-label="gender"*/}
      {/*        name="gender1"*/}
      {/*        value={value}*/}
      {/*        onChange={handleChange}*/}
      {/*      >*/}
      {/*        {locationsData.map((item, index) => {*/}
      {/*          return (*/}
      {/*            <React.Fragment key={index}>*/}
      {/*              <Link to={`/locations/${item.location}`}>*/}
      {/*                {" "}*/}
      {/*                <FormControlLabel*/}
      {/*                  value={item.location}*/}
      {/*                  control={<Radio />}*/}
      {/*                  label={item.location}*/}
      {/*                />{" "}*/}
      {/*              </Link>*/}
      {/*            </React.Fragment>*/}
      {/*          );*/}
      {/*        })}*/}
      {/*      </RadioGroup>*/}
      {/*    </FormLabel>*/}
      {/*  </FormControl>*/}
      {/*</Toolbar>*/}
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

// const DepartmentsData = [
//   {
//     id: "1",
//     title: "creative",
//   },
//   {
//     id: "2",
//     title: "delivery",
//   },
//   {
//     id: "3",
//     title: "marketing",
//   },
//   {
//     id: "4",
//     title: "operations",
//   },
//   {
//     id: "5",
//     title: "production",
//   },
//   {
//     id: "6",
//     title: "strategy & growth",
//   },
//   {
//     id: "7",
//     title: "technology",
//   },
// ];
