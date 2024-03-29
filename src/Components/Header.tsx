import * as React from "react";
import Box from "@mui/material/Box";
import { TabContext, TabPanel } from "@mui/lab";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import Projects from "../Pages/Projects";

interface HeaderProps {
  headerLinks: Record<string, string>;
}

export default function Header({ headerLinks }: HeaderProps) {
  const [value, setValue] = React.useState(Object.values(headerLinks)[0]);

  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: 1,
            borderColor: "divider",
            
          }}
        >
          <TabList
            sx={{
              
            }}
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            {Object.entries(headerLinks).map(([text, path], index) => (
              <Tab sx={{
                color:"#f1f1f1"
              }} key={index} label={text} value={path} />
            ))}
          </TabList>
        </Box> */}

        <TabPanel value="home">
          <Home></Home>
        </TabPanel>
        <TabPanel value="about-me">
          <About></About>
        </TabPanel>
        <TabPanel value="skills">
          <Skills></Skills>
        </TabPanel>
        <TabPanel value="contact">
          <Contact></Contact>
        </TabPanel>
        <TabPanel value="projects">
          <Projects />
        </TabPanel>
        
      </TabContext>
    </Box>
  );
}
