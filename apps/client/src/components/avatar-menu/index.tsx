import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import "./style.css";
import { inputStyles } from "../formstyles";
import { Link } from "react-router-dom";

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="content_avatar">
        <Tooltip title="Perfil">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar variant="rounded" sx={{ width: 30, height: 30 }}>
              J
            </Avatar>
          </IconButton>
        </Tooltip>
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: { ...inputStyles.avatarStyles },
        }}
      >
        <MenuItem id="menu" onClick={handleClose}>
          <Avatar variant="rounded" /> <p className="avatar_text">Johan Díaz</p>
        </MenuItem>
        <Divider />
        <MenuItem id="menu" onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <p className="avatar_text">Configs</p>
        </MenuItem>

        <Link to="/preferences">
          <MenuItem id="menu">
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            <p className="avatar_text">Preferencias</p>
          </MenuItem>
        </Link>
        
        <MenuItem id="menu" onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <p className="avatar_text">Logout</p>
        </MenuItem>
      </Menu>
    </>
  );
}
