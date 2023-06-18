import React from "react";
import { AppBar, Toolbar, styled, InputBase, Box } from "@mui/material";
import {
  Menu as MenuIcon,
  Search,
  Tune,
  HelpOutlineOutlined,
  SettingsOutlined,
  AppsOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import { gmailLogo } from "../constants/constant";

const StyledAppBar = styled(AppBar)({
  background: "#F5F5F5",
  boxShadow: "none",
});

const SearchWrapper = styled(Box)({
  background: "#EAF1FB",
  marginLeft: "80px",
  borderRadius: "25px",
  minWidth: "690px",
  maxWidth: "720px",
  height: "49px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 15px",
  "& > div": {
    width: "100%",
    padding: "0 10px",
  },
});

const OptionsWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "end",
  "& > svg": {
    marginLeft: "20px",
  },
});
const Header = ({ toggleDrawer}) => {
  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          <MenuIcon color="action" onClick={toggleDrawer} />
          <img
            src={gmailLogo}
            alt="logo"
            style={{ width: 115, marginLeft: 20 }}
          />
          <SearchWrapper>
            <Search color="action" />
            <InputBase placeholder="Search in mail" />
            <Tune color="action" />
          </SearchWrapper>
          <OptionsWrapper>
            <HelpOutlineOutlined color="action" />
            <SettingsOutlined color="action" />
            <AppsOutlined color="action" />
            <AccountCircleOutlined color="action" />
          </OptionsWrapper>
        </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default Header;
