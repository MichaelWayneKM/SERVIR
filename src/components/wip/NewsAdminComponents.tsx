import React, { useEffect, useRef } from "react";
import { render } from "react-dom";

import EmailEditor from "react-email-editor";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button } from "@mui/material";

const Editor = (props: any) => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    (emailEditorRef.current as any).editor?.exportHtml((data: any) => {
      const { design, html } = data;
      console.log("exportHtml", html);
    });
  };

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  const onReady = () => {
    // editor is ready
    console.log("onReady");
  };

  return (
    <div style={{ marginTop: 40}}>
      <div>
        <Button variant="outlined" onClick={exportHtml}>Publish  </Button>
      </div>

      <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
    </div>
  );
};

function NewsAdminComponents() {

  const [value, setValue] = React.useState("1");
  const [smallDevices, setSmallDevices] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (windowWidth < 1105) {
        setSmallDevices(true);
    } else { setSmallDevices(false); }
  }, [windowWidth])

  useEffect(() => {
    window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
    })

    
  }, [])

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          {!smallDevices ? <Tab label="Create News & Posts" value="1" /> : null}
          <Tab label="Create Event" value="2" />
          {/* <Tab label="Item Three" value="3" /> */}
        </TabList>
      </Box>
      {!smallDevices ? <TabPanel value="1"><Editor /></TabPanel> : null}
      <TabPanel value="2">Item Two</TabPanel>
      {/* <TabPanel value="3">Item Three</TabPanel> */}
    </TabContext>
  );
}

export default NewsAdminComponents;
