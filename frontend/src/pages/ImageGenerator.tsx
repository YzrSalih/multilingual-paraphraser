import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Avatar,
  Card,
  CardMedia,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { ImageOutlined, AutoAwesome } from '@mui/icons-material';

const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [style, setStyle] = useState('realistic');

  const generateImage = async () => {
    setLoading(true);
    setTimeout(() => {
      setImageUrl('https://via.placeholder.com/512x512?text=AI+Generated+Image');
      setLoading(false);
    }, 2000);
  };

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={4}>
        <Avatar 
          sx={{ 
            background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
            mr: 2, 
            width: 56, 
            height: 56,
            boxShadow: '0 4px 14px rgba(168, 85, 247, 0.3)',
          }}
        >
          <ImageOutlined sx={{ fontSize: 32 }} />
        </Avatar>
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Image Creator
          </Typography>
          <Typography variant="body2" color="text.secondary">
            AI-powered image generation from text prompts
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <TextField
              fullWidth
              multiline
              rows={6}
              label="Image Description"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the image you want to generate..."
              variant="outlined"
              sx={{ mb: 3 }}
            />

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Style</InputLabel>
              <Select value={style} onChange={(e) => setStyle(e.target.value)} label="Style">
                <MenuItem value="realistic">Realistic</MenuItem>
                <MenuItem value="artistic">Artistic</MenuItem>
                <MenuItem value="cartoon">Cartoon</MenuItem>
                <MenuItem value="abstract">Abstract</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={generateImage}
              disabled={loading || !prompt.trim()}
              startIcon={loading ? <CircularProgress size={20} /> : <AutoAwesome />}
              sx={{
                bgcolor: '#8b5cf6',
                '&:hover': { bgcolor: '#7c3aed' },
              }}
            >
              {loading ? 'Generating...' : 'Generate Image'}
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          {imageUrl ? (
            <Card elevation={3}>
              <CardMedia component="img" image={imageUrl} alt="Generated" sx={{ height: 400 }} />
            </Card>
          ) : (
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: 400,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#f3f4f6',
              }}
            >
              <Typography color="text.secondary">Your generated image will appear here</Typography>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImageGenerator;
