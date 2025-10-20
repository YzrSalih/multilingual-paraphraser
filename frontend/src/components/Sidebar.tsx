import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Divider,
  Avatar,
} from '@mui/material';
import {
  EditNote,
  CheckCircleOutline,
  SmartToy,
  FindInPage,
  PersonOutline,
  ForumOutlined,
  ImageOutlined,
  MenuBookOutlined,
  GTranslate,
  BookmarkBorderOutlined,
  AutoGraphOutlined,
  WorkspacePremiumOutlined,
  AutoAwesome,
} from '@mui/icons-material';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  darkMode: boolean;
}

interface MenuItem {
  id: string;
  icon: JSX.Element;
  label: string;
  color: string;
  premium?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onPageChange, darkMode }) => {
  const menuItems: MenuItem[] = [
    {
      id: 'paraphraser',
      icon: <EditNote />,
      label: 'Text Rewriter',
      color: '#6366f1',
    },
    {
      id: 'grammar',
      icon: <CheckCircleOutline />,
      label: 'Grammar Check',
      color: '#10b981',
    },
    {
      id: 'ai-detector',
      icon: <SmartToy />,
      label: 'AI Detection',
      color: '#8b5cf6',
    },
    {
      id: 'plagiarism',
      icon: <FindInPage />,
      label: 'Plagiarism Scan',
      color: '#f59e0b',
    },
    {
      id: 'humanizer',
      icon: <PersonOutline />,
      label: 'Text Humanizer',
      color: '#ec4899',
    },
    {
      id: 'chat',
      icon: <ForumOutlined />,
      label: 'AI Assistant',
      color: '#0ea5e9',
    },
    {
      id: 'image-generator',
      icon: <ImageOutlined />,
      label: 'Image Creator',
      color: '#a855f7',
    },
    {
      id: 'summarizer',
      icon: <MenuBookOutlined />,
      label: 'Smart Summary',
      color: '#14b8a6',
    },
    {
      id: 'translate',
      icon: <GTranslate />,
      label: 'Language Bridge',
      color: '#06b6d4',
    },
    {
      id: 'citation',
      icon: <BookmarkBorderOutlined />,
      label: 'Citation Tool',
      color: '#6366f1',
    },
    {
      id: 'flow',
      icon: <AutoGraphOutlined />,
      label: 'Smart Flow',
      color: '#8b5cf6',
    },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 200,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 200,
          boxSizing: 'border-box',
          bgcolor: darkMode ? '#1e293b' : '#ffffff',
          borderRight: '1px solid',
          borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
          boxShadow: '4px 0 10px rgba(0,0,0,0.1)',
        },
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
        }}
      >
        <Avatar
          sx={{
            bgcolor: 'rgba(255,255,255,0.2)',
            color: 'white',
            width: 40,
            height: 40,
            mr: 1,
            backdropFilter: 'blur(10px)',
          }}
        >
          <AutoAwesome />
        </Avatar>
        <Typography variant="h6" fontWeight={700}>
          AcademAI
        </Typography>
      </Box>

      {/* Menu Items */}
      <List sx={{ pt: 2, px: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>              <ListItemButton
              selected={currentPage === item.id}
              onClick={() => onPageChange(item.id)}
              sx={{
                borderRadius: 2,
                '&.Mui-selected': {
                  bgcolor: darkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.1)',
                  borderLeft: '3px solid',
                  borderColor: item.color,
                  '&:hover': {
                    bgcolor: darkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.15)',
                  },
                },
                '&:hover': {
                  bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: currentPage === item.id ? item.color : 'text.secondary',
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: '0.875rem',
                  fontWeight: currentPage === item.id ? 600 : 400,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Premium Section */}
      <Box sx={{ px: 2, pb: 2 }}>
        <ListItemButton
          onClick={() => onPageChange('premium')}
          sx={{
            borderRadius: 2,
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            color: 'white',
            '&:hover': {
              background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
            },
            flexDirection: 'column',
            py: 2,
          }}
        >
          <WorkspacePremiumOutlined sx={{ fontSize: 40, mb: 1 }} />
          <Typography variant="body2" fontWeight={700} textAlign="center">
            AcademAI
            <br />
            Pro
          </Typography>
        </ListItemButton>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
