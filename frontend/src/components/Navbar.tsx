import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import { WorkspacePremiumOutlined, Login, Logout } from '@mui/icons-material';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  darkMode: boolean;
  userName?: string | null;
  onSignIn?: (name: string) => void;
  onSignOut?: () => void;
}

const getInitials = (name?: string | null) => {
  if (!name) return 'A';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange, userName, onSignIn, onSignOut }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleSignIn = async () => {
    handleClose();
    const name = window.prompt('Enter your name to sign in:');
    if (name && onSignIn) {
      onSignIn(name);
    }
  };

  const handleSignOut = () => {
    handleClose();
    onSignOut && onSignOut();
  };

  return (
    <AppBar
      elevation={0}
      position="fixed"
      sx={{
        ml: '200px',
        width: 'calc(100% - 200px)',
        backdropFilter: 'saturate(180%) blur(10px)',
        background: 'rgba(255,255,255,0.7)',
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'rgba(0,0,0,0.08)'
      }}
    >
      <Toolbar sx={{ minHeight: 64, px: 2 }}>
        {/* Left empty (no brand in navbar) */}
        <Box />

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Actions */}
        <Button
          size="medium"
          startIcon={<WorkspacePremiumOutlined />}
          onClick={() => onPageChange('premium')}
          sx={{
            mr: 1.5,
            fontWeight: 700,
            borderRadius: 2,
            color: '#fff',
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            '&:hover': { background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)' }
          }}
        >
          Upgrade to Pro
        </Button>

        {/* User */}
        <Tooltip title={userName ? userName : 'Sign in'}>
          <IconButton onClick={handleAvatarClick} size="small" sx={{ ml: 1 }}>
            <Avatar sx={{ bgcolor: 'primary.main', width: 36, height: 36 }}>
              {getInitials(userName)}
            </Avatar>
          </IconButton>
        </Tooltip>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} onClick={handleClose}>
          {userName ? (
            [
              <MenuItem key="greet" disabled>Signed in as {userName}</MenuItem>,
              <MenuItem key="signout" onClick={handleSignOut}>
                <Logout fontSize="small" sx={{ mr: 1 }} /> Sign out
              </MenuItem>
            ]
          ) : (
            <MenuItem onClick={handleSignIn}>
              <Login fontSize="small" sx={{ mr: 1 }} /> Sign in
            </MenuItem>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
