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
  Stack,
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
} from '@mui/icons-material';

interface HomeProps {
  onNavigate: (page: string) => void;
  userName?: string;
}

const Home: React.FC<HomeProps> = ({ onNavigate, userName }) => {
  const tools = [
    { id: 'paraphraser', title: 'Text Rewriter', description: 'Increase fluency', icon: <EditNote />, color: '#0ea5e9' },
    { id: 'grammar', title: 'Grammar Checker', description: 'Fix mistakes', icon: <CheckCircleOutline />, color: '#10b981' },
    { id: 'plagiarism', title: 'Plagiarism Checker', description: 'Prevent plagiarism', icon: <FindInPage />, color: '#f59e0b' },
    { id: 'ai-detector', title: 'AI Detector', description: 'Analyze text', icon: <SmartToy />, color: '#7c3aed' },
    { id: 'humanizer', title: 'AI Humanizer', description: 'Humanize text', icon: <PersonOutline />, color: '#8b5cf6' },
    { id: 'chat', title: 'AI Assistant', description: 'Chat with AI', icon: <ForumOutlined />, color: '#0ea5e9' },
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
      {/* Modern Hero */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 6, md: 10 },
          background: 'radial-gradient(1200px 400px at -10% -20%, rgba(14,165,233,0.18) 0%, rgba(124,58,237,0.10) 35%, rgba(255,255,255,0) 70%)',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Fade in timeout={600}>
                <Box>
                  <Chip
                    icon={<AutoAwesome />}
                    label={`Welcome, ${nameToShow}`}
                    sx={{ mb: 2, bgcolor: 'rgba(14,165,233,0.12)', color: 'primary.main', fontWeight: 700 }}
                  />
                  <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
                    Write better, faster with CoWrite
                  </Typography>
                  <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
                    Paraphrase, humanize, and perfect your writing across languages with powerful AI tools.
                  </Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<AutoAwesome />}
                      onClick={() => onNavigate('humanizer')}
                    >
                      Start humanizing
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      endIcon={<ArrowForward />}
                      onClick={() => onNavigate('paraphraser')}
                    >
                      Explore tools
                    </Button>
                  </Stack>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={5}>
              <Zoom in timeout={700}>
                <Paper elevation={8} sx={{ p: 3, borderRadius: 3 }}>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Preview
                  </Typography>
                  <Card
                    elevation={0}
                    sx={{
                      borderRadius: 3,
                      p: 2,
                      border: '1px solid rgba(14,165,233,0.25)',
                      background: 'linear-gradient(180deg, rgba(14,165,233,0.06), rgba(124,58,237,0.06))',
                    }}
                  >
                    <CardContent>
                      <Box display="flex" alignItems="center" mb={2}>
                        <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}><PersonOutline /></Avatar>
                        <Box>
                          <Typography fontWeight={700}>AI Humanizer</Typography>
                          <Typography variant="body2" color="text.secondary">Natural, citation-safe rewrites</Typography>
                        </Box>
                      </Box>
                      <Paper variant="outlined" sx={{ p: 2, borderRadius: 2, mb: 1 }}>
                        "In recent years, AI has significantly transformed..."
                      </Paper>
                      <ArrowForward sx={{ color: 'text.secondary', mx: 1 }} />
                      <Paper variant="outlined" sx={{ p: 2, borderRadius: 2, mt: 1 }}>
                        In recent years, artificial intelligence has reshaped...
                      </Paper>
                    </CardContent>
                  </Card>
                </Paper>
              </Zoom>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Quick Actions */}
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
          <Button onClick={() => onNavigate('paraphraser')} variant="outlined" startIcon={<EditNote />}>Paraphrase</Button>
          <Button onClick={() => onNavigate('grammar')} variant="outlined" startIcon={<CheckCircleOutline />}>Grammar</Button>
          <Button onClick={() => onNavigate('ai-detector')} variant="outlined" startIcon={<SmartToy />}>AI Detect</Button>
          <Button onClick={() => onNavigate('plagiarism')} variant="outlined" startIcon={<FindInPage />}>Plagiarism</Button>
        </Stack>

        {/* Tools Grid */}
        <Grid container spacing={3} mb={4}>
          {tools.map((tool, index) => (
            <Grid item xs={12} sm={6} md={4} key={tool.id}>
              <Card
                onClick={() => onNavigate(tool.id)}
                elevation={0}
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  p: 1,
                  borderRadius: 3,
                  border: '1px solid rgba(0,0,0,0.06)',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.7), rgba(246,247,251,0.9))',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': { transform: 'translateY(-6px)', boxShadow: 8 },
                }}
              >
                <CardContent>
                  <Box display="flex" alignItems="center" mb={1.5}>
                    <Avatar sx={{ bgcolor: tool.color, mr: 1.5, width: 44, height: 44 }}>
                      {tool.icon}
                    </Avatar>
                    <Box flexGrow={1}>
                      <Typography variant="h6" fontWeight={700}>{tool.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{tool.description}</Typography>
                    </Box>
                    <ArrowForward sx={{ color: 'text.secondary' }} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* More Tools */}
        <Grid container spacing={2} mb={8}>
          {moreTools.map((tool, index) => (
            <Grid item xs={6} sm={4} md={2.4} key={tool.id}>
              <Paper
                onClick={() => onNavigate(tool.id)}
                elevation={0}
                sx={{
                  p: 2,
                  textAlign: 'center',
                  cursor: 'pointer',
                  borderRadius: 3,
                  border: '1px solid rgba(0,0,0,0.06)',
                  '&:hover': { boxShadow: 4 },
                }}
              >
                <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 1, width: 40, height: 40 }}>
                  {tool.icon}
                </Avatar>
                <Typography variant="caption" fontWeight={600}>{tool.title}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Premium CTA */}
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Zoom in timeout={800}>
          <Paper
            elevation={8}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              background: 'linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)',
              color: 'white',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box position="relative" zIndex={1}>
              <Typography variant="h3" fontWeight={800} gutterBottom>
                Go Premium
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, opacity: 0.95 }}>
                Unlock unlimited rewrites, advanced modes, and priority speed.
              </Typography>
              <Button variant="contained" size="large" onClick={() => onNavigate('premium')} sx={{ bgcolor: 'white', color: '#0ea5e9', fontWeight: 800 }}>
                Upgrade now
              </Button>
            </Box>
          </Paper>
        </Zoom>
      </Container>
    </Box>
  );
};

export default Home;
