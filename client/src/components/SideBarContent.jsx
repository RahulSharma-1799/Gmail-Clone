import React, { useState } from "react";
import { Box, Button, styled, List, ListItem } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";
import { SIDEBAR_DATA } from "../config/sidebar.config";
import ComposeMail from "./ComposeMail";
const ComposeButton = styled(Button)({
  background: "#c2e7ff",
  color: "#001d35",
  padding: "15px",
  borderRadius: "15px",
  marginLeft: "20px",
  minWidth: "140px",
  textTransform: "none",
});
const Container = styled(Box)({
  padding: "10px",
  "& > ul": {
    padding: "10px 0px 0px 5px",
    fontSize: "15px",
    fontWeight: 500,
    cursor: "pointer",
  },
  "&>ul>li>svg": {
    marginRight: "20px",
  },
});

const SideBarContent = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const onComposeClick = () => {
    setOpenDialog(true);
  };
  return (
    <Container>
      <ComposeButton
        onClick={() => {
          onComposeClick();
        }}
      >
        <CreateOutlined />
        Compose
      </ComposeButton>
      <List>
        {SIDEBAR_DATA.map((data) => (
          <ListItem>
            <data.icon fontSize="small" /> {data.title}
          </ListItem>
        ))}
      </List>
      <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Container>
  );
};

export default SideBarContent;
