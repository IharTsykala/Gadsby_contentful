import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";

const CardCategory = ({ name }) => {
  const [bigSize, setBigSize] = React.useState(false);

  return (
    <Box component={"div"} className={"card-category-container"}>
      <Typography variant={`overline`}>{name}</Typography>
      <Typography variant={`overline`}>{`open roles`}</Typography>
      <AddIcon />
    </Box>
  );
};

export default CardCategory;
