import React, { useCallback, useEffect } from "react";
import { Toolbar } from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { Link, graphql, useStaticQuery, navigate } from "gatsby";

const Header = () => {
  const [value, setValue] = React.useState(
    localStorage.getItem("valueLocation") || "View-All"
  );
  useEffect(() => {
    navigate("/locations/view-all");
  }, []);

  const response = useStaticQuery(
    graphql`
      query {
        allContentfulOfficeLocation {
          nodes {
            location
          }
        }
      }
    `
  );
  const allViewLocation = { location: "View-All" };
  const locations = [].concat(
    allViewLocation,
    response.allContentfulOfficeLocation.nodes
  );
  const pathLocations = locations.map((locationObject) => {
    if (locationObject.location.indexOf(" ") !== -1)
      return locationObject.location.replace(" ", "-").toLowerCase();
    return locationObject.location.toLowerCase();
  });

  return (
    <>
      <Toolbar className={`header-container`}>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            <RadioGroup aria-label="gender" name="gender1" value={value}>
              {locations.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <Link
                      to={`/locations/${pathLocations[index]}`}
                      onClick={() => {
                        setValue(item.location),
                        localStorage.setItem("valueLocation", item.location);
                      }}
                    >
                      <FormControlLabel
                        value={item.location}
                        control={<Radio />}
                        label={item.location}
                      />{" "}
                    </Link>
                  </React.Fragment>
                );
              })}
            </RadioGroup>
          </FormLabel>
        </FormControl>
      </Toolbar>
    </>
  );
};

export default Header;
