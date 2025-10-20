import React from 'react';
import { Box, Paper, Typography, Button, Avatar, Grid, Card, CardContent } from '@mui/material';
import { WorkspacePremiumOutlined, CheckCircle, AutoAwesome, Speed, Security } from '@mui/icons-material';

const Premium: React.FC = () => {
  const features = [
    'Unlimited AI Detection & Analysis',
    'Advanced Text Humanization',
    'Real-time Plagiarism Scanning',
    'AI-Powered Image Generation',
    '24/7 Priority Support',
    'Ad-Free Experience',
    'Advanced Grammar & Style Check',
    'Professional Citation Tools',
    'Multi-Language Support',
    'Export in Multiple Formats',
  ];

  return (
    <Box>
      <Box textAlign="center" mb={6}>
        <Avatar
          sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            width: 100,
            height: 100,
            mx: 'auto',
            mb: 3,
            boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)',
          }}
        >
          <WorkspacePremiumOutlined sx={{ fontSize: 60 }} />
        </Avatar>
        <Typography variant="h3" fontWeight={800} gutterBottom>
          Cowrite Pro
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Unlock unlimited potential with our professional features
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={12}
            sx={{
              p: 5,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                borderRadius: '50%',
              },
            }}
          >
            <Box display="flex" alignItems="center" mb={2}>
              <AutoAwesome sx={{ fontSize: 40, mr: 2 }} />
              <Typography variant="h4" fontWeight={700}>
                $12.99/month
              </Typography>
            </Box>
            <Typography variant="body1" mb={1} sx={{ opacity: 0.9 }}>
              Billed monthly
            </Typography>
            <Typography variant="body2" mb={4} sx={{ opacity: 0.8 }}>
              Or $119.99/year (Save 23%)
            </Typography>
            <Button
              variant="contained"
              size="large"
              fullWidth
              startIcon={<Speed />}
              sx={{
                bgcolor: 'white',
                color: '#6366f1',
                fontWeight: 700,
                py: 1.5,
                '&:hover': { 
                  bgcolor: '#f8f9fa',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                },
                transition: 'all 0.3s',
              }}
            >
              Upgrade to Pro
            </Button>
            <Box mt={3} textAlign="center">
              <Security sx={{ mr: 1, fontSize: 16 }} />
              <Typography variant="caption">
                30-day money-back guarantee
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card 
            elevation={3}
            sx={{
              height: '100%',
              background: 'linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%)',
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom fontWeight={700} mb={3}>
                ✨ What You Get:
              </Typography>
              <Grid container spacing={2}>
                {features.map((feature, index) => (
                  <Grid item xs={12} key={index}>
                    <Box 
                      display="flex" 
                      alignItems="flex-start" 
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        '&:hover': {
                          bgcolor: 'rgba(102, 126, 234, 0.05)',
                        },
                        transition: 'all 0.2s',
                      }}
                    >
                      <CheckCircle sx={{ color: '#6366f1', mr: 2, mt: 0.5, fontSize: 24 }} />
                      <Typography variant="body1" fontWeight={500}>
                        {feature}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Premium;
