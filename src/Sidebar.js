import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AddCommentIcon from "@material-ui/icons/AddComment";
import SidebarChat from "./SidebarChat";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="data:image/jpeg;base64,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" />
        <div className="sidebar_headerRight">
          <IconButton>
            <AddCommentIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar_chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
