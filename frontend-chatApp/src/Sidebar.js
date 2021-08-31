import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Sidebarchat from './Sidebarchat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">

                <Avatar src='data:image/jpeg;base64,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' />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
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
                <div className="sidebar_serachContainer">
                    <SearchOutlinedIcon />
                    <input placeholder="Search or type text" type="text"></input>
                </div>
            </div>

            <div className="sidebar_chat">
                <Sidebarchat />
                <Sidebarchat />
                <Sidebarchat />
                <Sidebarchat />

            </div>
        </div>
    )
}

export default Sidebar
