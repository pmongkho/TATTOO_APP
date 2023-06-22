import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";

function Navbar() {
  return (
    <div className=" bottom-0 bg-blue-900 p-3 flex items-center justify-between text-white w-full fixed">
      {/* <div className="navbar__left">
        <Avatar src={require("./azulaLogo.png")} />
      </div> */}
      <div className=" w-full flex items-center justify-evenly ">
        {" "}
        <div className="navbar__option">
          {" "}
          <HomeIcon style={{ fontSize: 50 }} />
        </div>
        <div className="navbar__option">
          {" "}
          <CalendarTodayIcon style={{ fontSize: 40 }} />
        </div>
        <div className="navbar__option">
          {" "}
          <ChatBubbleIcon style={{ fontSize: 40 }} />
        </div>
      </div>
      <div className=" mr-5">
        <MenuIcon style={{ fontSize: 40 }} />
      </div>
    </div>
  );
}

export default Navbar;
