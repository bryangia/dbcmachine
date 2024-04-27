import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography } from "@mui/material";

const TabContent = ({ index }) => {
  const tabContent = {
    About: "About page",
    Products: "Product page",
    Gallery: "Gallery Page",
    Contact: "Contact Page",
  };

  return <div>{tabContent[index]}</div>;
};

export const TabComponent = () => {
  const [value, setValue] = useState("About");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography vairant="h1" gutterBottom>
        DBC Machine
      </Typography>
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        <Tab label="About" value="About" />
        <Tab label="Products" value="Products" />
        <Tab label="Gallery" value="Gallery" />
        <Tab label="Contact" value="Contact" />
      </Tabs>
      <TabContent index={value} />
    </>
  );
};
