import React from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  Paper,
  Chip,
  Fade,
  Zoom,
} from '@mui/material';
import {
  AutoAwesome,
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
  ArrowForward,
  TrendingUp,
  Security,
  Speed,
} from '@mui/icons-material';

interface HomeProps {
  onNavigate: (page: string) => void;
  userName?: string;
}

const Home: React.FC<HomeProps> = ({ onNavigate, userName }) => {
  const tools = [
    {
      id: 'paraphraser',
      title: 'Text Rewriter',
      description: 'Increase fluency',
      icon: <EditNote />,
      color: '#6366f1',
    },
    {
      id: 'grammar',
      title: 'Grammar Checker',
      description: 'Fix mistakes',
      icon: <CheckCircleOutline />,
      color: '#10b981',
    },
    {
      id: 'plagiarism',
      title: 'Plagiarism Checker',
      description: 'Prevent plagiarism',
      icon: <FindInPage />,
      color: '#f59e0b',
    },
    {
      id: 'ai-detector',
      title: 'AI Detector',
      description: 'Analyze text',
      icon: <SmartToy />,
      color: '#06b6d4',
    },
    {
      id: 'humanizer',
      title: 'AI Humanizer',
      description: 'Humanize text',
      icon: <PersonOutline />,
      color: '#8b5cf6',
    },
    {
      id: 'chat',
      title: 'AI Assistant',
      description: 'Chat with AI',
      icon: <ForumOutlined />,
      color: '#0ea5e9',
    },
  ];

  const moreTools = [
    { id: 'image-generator', title: 'Image Creator', icon: <ImageOutlined /> },
    { id: 'summarizer', title: 'Smart Summary', icon: <MenuBookOutlined /> },
    { id: 'translate', title: 'Language Bridge', icon: <GTranslate /> },
    { id: 'citation', title: 'Citation Tool', icon: <BookmarkBorderOutlined /> },
    { id: 'flow', title: 'Smart Flow', icon: <AutoGraphOutlined /> },
  ];

  const nameToShow = userName && userName.trim().length > 0 ? userName : 'there';

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          pt: 8,
          pb: 8, // reduced to balance the purple area height
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '320px', // reduced for balance
            height: '320px',
            background: 'rgba(255, 255, 255, 0.12)',
            borderRadius: '50%',
            transform: 'translate(50%, -50%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '240px', // reduced for balance
            height: '240px',
            background: 'rgba(255, 255, 255, 0.12)',
            borderRadius: '50%',
            transform: 'translate(-30%, 30%)',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Fade in timeout={800}>
            <Box textAlign="center">
              <Chip
                icon={<AutoAwesome />}
                label="Works everywhere"
                sx={{
                  mb: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.22)',
                  color: 'white',
                  fontWeight: 600,
                  backdropFilter: 'blur(10px)',
                }}
              />

              <Typography
                variant="h2"
                sx={{
                  color: 'white',
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                Write better everywhere
              </Typography>

              <Button
                variant="contained"
                size="large"
                startIcon={<AutoAwesome />}
                onClick={() => onNavigate('humanizer')}
                sx={{
                  bgcolor: 'white',
                  color: '#6366f1',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  boxShadow: 6,
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.95)',
                    transform: 'translateY(-2px)',
                    boxShadow: 12,
                  },
                  transition: 'all 0.3s',
                }}
              >
                Get Started - It's free!
              </Button>

              {/* Decorative Robot Illustration Placeholder */}
              <Box
                sx={{
                  mt: 4,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  sx={{
                    width: 150,
                    height: 150,
                    bgcolor: 'rgba(255, 255, 255, 0.22)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <SmartToy sx={{ fontSize: 80, color: 'white' }} />
                </Avatar>
              </Box>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: -4, pb: 8, position: 'relative', zIndex: 2 }}>
        <Fade in timeout={1000}>
          <Box mb={6}>
            <Typography
              variant="h4"
              textAlign="center"
              gutterBottom
              sx={{ fontWeight: 700, mb: 1 }}
            >
              Hi <span style={{ color: '#6366f1' }}>{nameToShow}</span>, continue working with
              popular writing tools
            </Typography>
          </Box>
        </Fade>

        {/* Main Tools Grid */}
        <Grid container spacing={3} mb={4}>
          {tools.map((tool, index) => (
            <Grid item xs={12} sm={6} md={4} key={tool.id}>
              <Zoom in timeout={800 + index * 100}>
                <Card
                  onClick={() => onNavigate(tool.id)}
                  sx={{
                    height: '100%',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 8,
                    },
                  }}
                >
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Avatar
                        sx={{
                          bgcolor: tool.color,
                          mr: 2,
                          width: 48,
                          height: 48,
                        }}
                      >
                        {tool.icon}
                      </Avatar>
                      <Box flexGrow={1}>
                        <Typography variant="h6" fontWeight={700}>
                          {tool.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {tool.description}
                        </Typography>
                      </Box>
                      <ArrowForward sx={{ color: 'text.secondary' }} />
                    </Box>
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
          ))}
        </Grid>

        {/* More Tools Section */}
        <Box textAlign="center" mb={4}>
          <Button
            variant="text"
            endIcon={<ArrowForward />}
            sx={{ fontWeight: 600, color: 'primary.main' }}
          >
            View more tools
          </Button>
        </Box>

        <Grid container spacing={2} mb={6}>
          {moreTools.map((tool, index) => (
            <Grid item xs={6} sm={4} md={2.4} key={tool.id}>
              <Zoom in timeout={1200 + index * 100}>
                <Paper
                  onClick={() => onNavigate(tool.id)}
                  sx={{
                    p: 2,
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4,
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: 'primary.main',
                      mx: 'auto',
                      mb: 1,
                      width: 40,
                      height: 40,
                    }}
                  >
                    {tool.icon}
                  </Avatar>
                  <Typography variant="caption" fontWeight={600}>
                    {tool.title}
                  </Typography>
                </Paper>
              </Zoom>
            </Grid>
          ))}
        </Grid>

        {/* Premium Section */}
        <Zoom in timeout={1500}>
          <Paper
            elevation={8}
            sx={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              p: 6,
              borderRadius: 4,
              color: 'white',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative Element */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '300px',
                height: '300px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                transform: 'translate(30%, 30%)',
              }}
            />

            <Box position="relative" zIndex={1}>
              <Typography variant="h3" fontWeight={800} gutterBottom>
                Power up with Premium
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.95 }}>
                Unlock 8+ paraphrasing modes, unlimited inputs, advanced rewrites, and much more.
              </Typography>

              <Button
                variant="contained"
                size="large"
                onClick={() => onNavigate('premium')}
                startIcon={<AutoAwesome />}
                sx={{
                  bgcolor: 'white',
                  color: '#6366f1',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  boxShadow: 6,
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.95)',
                    transform: 'translateY(-2px)',
                    boxShadow: 12,
                  },
                  transition: 'all 0.3s',
                }}
              >
                Get Premium
              </Button>

              {/* Features */}
              <Grid container spacing={4} mt={4} justifyContent="center">
                <Grid item xs={12} sm={4}>
                  <Box>
                    <TrendingUp sx={{ fontSize: 48, mb: 1 }} />
                    <Typography variant="h6" fontWeight={700}>
                      Unlimited Rewrites
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box>
                    <Speed sx={{ fontSize: 48, mb: 1 }} />
                    <Typography variant="h6" fontWeight={700}>
                      Lightning Fast
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box>
                    <Security sx={{ fontSize: 48, mb: 1 }} />
                    <Typography variant="h6" fontWeight={700}>
                      100% Secure
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Zoom>
      </Container>
    </Box>
  );
};

export default Home;
