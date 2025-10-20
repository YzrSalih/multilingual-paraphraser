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
          borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
          boxShadow: 'none',
        },
      }}
    >
      {/* Brand header */}
      <Box
        onClick={() => onPageChange('home')}
        sx={{
          p: 2,
          py: 0,
          minHeight: 64,
          display: 'flex',
          alignItems: 'center',
          gap: -5, // tighter spacing between logo and text
          cursor: 'pointer',
          borderBottom: '1px solid',
          borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
        }}
      >
        <Box
          component="img"
          src="/images/logo-academic-ai.png"
          alt="CoWrite"
          sx={{ width: 52, height: 52, borderRadius: 1, flexShrink: 0 }}
        />
        <Typography variant="subtitle1" fontWeight={800}>
          CoWrite
        </Typography>
      </Box>

      {/* Menu Items */}
      <List sx={{ pt: 1.5, px: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              selected={currentPage === item.id}
              onClick={() => onPageChange(item.id)}
              sx={{
                borderRadius: 2,
                '&.Mui-selected': {
                  bgcolor: darkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.08)',
                  borderLeft: '3px solid',
                  borderColor: item.color,
                  '&:hover': {
                    bgcolor: darkMode ? 'rgba(102, 126, 234, 0.28)' : 'rgba(102, 126, 234, 0.12)',
                  },
                },
                '&:hover': {
                  bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
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
            Cowrite
            <br />
            Pro
          </Typography>
        </ListItemButton>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
