import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tab1 from "./TabsData/Tab1";
import Tab2 from "./TabsData/Tab2";
import Tab3 from "./TabsData/Tab3";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="nav tabs"
      >
        <LinkTab label="Analysis Tab One" href="/drafts" {...a11yProps(0)} />
        <LinkTab label="Analysis Tab Two" href="/trash" {...a11yProps(1)} />
        <LinkTab label="Analysis Tab Three" href="/spam" {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Tab1 />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Tab2 />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Tab3 />
      </TabPanel>
    </div>
  );
}
