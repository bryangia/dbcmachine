import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { AboutContent } from "./pages/About";
import { HomeContent } from "./pages/Home";

const TabContent = ({ index }) => {
  const tabContent = {
    Home: HomeContent(),
    About: AboutContent(),
    Services: "Product page",
    Equipment: "Gallery Page"
  };

  return <div>{tabContent[index]}</div>;
};

export const TabComponent = () => {
  const [value, setValue] = useState("Home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange} variant="fullWidth" display='flex'>
        <Tab label="Home" value="Home"/>
        <Tab label="About" value="About" />
        <Tab label="Services" value="Services" />
        <Tab label="Equipment" value="Gallery" />
      </Tabs>
      <TabContent index={value} />
    </>
  );
};
