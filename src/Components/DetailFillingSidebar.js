import React from "react";
import { useEffect, useState } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import '../Styles/DetailsFillingSideBar.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from "@mui/system";


const ITEM_HEIGHT = 48;

const DetailFillingSidebar = (props) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);


  return (

    <div>
      {windowSize.innerWidth > 850 ?
        <Box
          sx={{
            width: "100%",
            maxWidth: 360,
            boxShadow: "0px 0px 4px 0px rgb(228, 228, 228)",
            height: "fit-content",
          }}>
          <List disablePadding>
            <ListItem disablePadding>
              <ListItemButton component='a' sx={props.tab === 0 ? { borderLeft: "3px solid rgb(0, 128, 255)" } : null} onClick={() => props.setTab(0)}>
                <AccountCircleOutlinedIcon color={props.tab === 0 ? 'info' : 'disabled'} />
                <ListItemText
                  className="IcoSpace"
                  primary="Personal Info"
                  sx={props.tab === 0 ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" } : null}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton component="a" sx={props.tab === 1 ? { borderLeft: "3px solid rgb(0, 128, 255)" } : null} onClick={() => props.setTab(1)}>
                <WorkHistoryRoundedIcon color={props.tab === 1 ? 'info' : 'disabled'} />
                <ListItemText
                  className="IcoSpace"
                  primary="Work Experience"
                  sx={props.tab === 1 ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" } : null}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton component="a" sx={props.tab === 2 ? { borderLeft: "3px solid rgb(0, 128, 255)" } : null} onClick={() => props.setTab(2)}>
                <SchoolRoundedIcon color={props.tab === 2 ? 'info' : 'disabled'} />
                <ListItemText
                  className="IcoSpace"
                  primary="Education"
                  sx={props.tab === 2 ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" } : null}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton component="a" sx={props.tab === 3 ? { borderLeft: "3px solid rgb(0, 128, 255)" } : null} onClick={() => props.setTab(3)}>
                <StarsRoundedIcon color={props.tab === 3 ? 'info' : 'disabled'} />
                <ListItemText
                  className="IcoSpace"
                  primary="Key Skills"
                  sx={props.tab === 3 ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" } : null}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box> :
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
            <MenuItem sx={props.tab === 0 ? { color: "rgb(0, 128, 255)" } : null} onClick={() => { props.setTab(0); handleClose(); }}>
              <AccountCircleOutlinedIcon color={props.tab === 0 ? 'info' : 'disabled'} />
              <ListItemText
                className="IcoSpace"
                primary="Personal Info"
                sx={props.tab === 0 ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" } : null}
              />
            </MenuItem><Divider />
            <MenuItem sx={props.tab === 1 ? { color: "rgb(0, 128, 255)" } : null} onClick={() => { props.setTab(1); handleClose(); }}>
              <WorkHistoryRoundedIcon color={props.tab === 1 ? 'info' : 'disabled'} />
              <ListItemText
                className="IcoSpace"
                primary="Work Experience"
                sx={props.tab === 1 ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" } : null}
              />
            </MenuItem><Divider />
            <MenuItem sx={props.tab === 2 ? { color: "rgb(0, 128, 255)" } : null} onClick={() => { props.setTab(2); handleClose(); }}>
              <SchoolRoundedIcon color={props.tab === 2 ? 'info' : 'disabled'} />
              <ListItemText
                className="IcoSpace"
                primary="Education"
                sx={props.tab === 2 ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" } : null}
              />
            </MenuItem><Divider />
            <MenuItem sx={props.tab === 3 ? { color: "rgb(0, 128, 255)" } : null} onClick={() => { props.setTab(3); handleClose(); }}>
              <StarsRoundedIcon color={props.tab === 3 ? 'info' : 'disabled'} />
              <ListItemText
                className="IcoSpace"
                primary="Key Skills"
                sx={props.tab === 3 ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" } : null}
              />
            </MenuItem>
          </Menu>
        </div>
      }
    </div>

  );
};

export default DetailFillingSidebar;
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
