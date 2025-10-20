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
          gap: 0.05, // tighter spacing between logo and text
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

      {/* Minimal & cool Premium Section */}
      <Box sx={{ px: 2, pb: 2 }}>
        <ListItemButton
          onClick={() => onPageChange('premium')}
          sx={{
            borderRadius: 3,
            background: darkMode
              ? 'rgba(40,48,80,0.45)'
              : 'rgba(240,248,255,0.7)',
            color: darkMode ? '#fff' : '#222',
            boxShadow: darkMode
              ? '0 2px 12px 0 rgba(80,80,120,0.10)'
              : '0 2px 12px 0 rgba(80,120,255,0.08)',
            border: darkMode
              ? '1.5px solid rgba(120,120,180,0.10)'
              : '1.5px solid rgba(120,120,180,0.10)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            py: 1.2,
            px: 1.5,
            gap: 1.2,
            transition: 'all 0.18s',
            '&:hover': {
              background: darkMode
                ? 'rgba(60,80,140,0.55)'
                : 'rgba(220,240,255,0.95)',
              boxShadow: darkMode
                ? '0 4px 16px 0 rgba(80,80,120,0.18)'
                : '0 4px 16px 0 rgba(80,120,255,0.13)',
              borderColor: darkMode ? '#6366f1' : '#6366f1',
            },
          }}
        >
          <WorkspacePremiumOutlined sx={{ fontSize: 28, color: darkMode ? '#fbbf24' : '#6366f1', mr: 1 }} />
          <Box>
            <Typography
              variant="subtitle2"
              fontWeight={700}
              sx={{ letterSpacing: 0.5, fontSize: '1.05rem', lineHeight: 1.2 }}
            >
              CoWrite <span style={{ color: darkMode ? '#fbbf24' : '#6366f1' }}>Pro</span>
            </Typography>
            <Typography
              variant="caption"
              sx={{ opacity: 0.7, fontWeight: 400, fontSize: '0.85rem', lineHeight: 1.1 }}
            >
              Upgrade for more features
            </Typography>
          </Box>
        </ListItemButton>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
