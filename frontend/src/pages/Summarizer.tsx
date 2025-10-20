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
  CardContent,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { MenuBookOutlined, AutoAwesome } from '@mui/icons-material';

const Summarizer: React.FC = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState('');
  const [summaryLength, setSummaryLength] = useState(50);
  const [summaryType, setSummaryType] = useState('paragraph');

  const generateSummary = async () => {
    setLoading(true);
    setTimeout(() => {
      setSummary('This is a mock summary of your text. Integrate with Gemini API for real summarization.');
      setLoading(false);
    }, 1500);
  };

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={4}>
        <Avatar 
          sx={{ 
            background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
            mr: 2, 
            width: 56, 
            height: 56,
            boxShadow: '0 4px 14px rgba(20, 184, 166, 0.3)',
          }}
        >
          <MenuBookOutlined sx={{ fontSize: 32 }} />
        </Avatar>
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Smart Summary
          </Typography>
          <Typography variant="body2" color="text.secondary">
            AI-powered text summarization with customizable length
          </Typography>
        </Box>
      </Box>

      <Paper elevation={3} sx={{ p: 4, mb: 3 }}>
        <TextField
          fullWidth
          multiline
          rows={10}
          label="Enter your text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your long text here to summarize..."
          variant="outlined"
          sx={{ mb: 3 }}
        />

        <Box sx={{ mb: 3 }}>
          <Typography gutterBottom>Summary Length: {summaryLength}%</Typography>
          <Slider
            value={summaryLength}
            onChange={(_, value) => setSummaryLength(value as number)}
            min={10}
            max={90}
            valueLabelDisplay="auto"
          />
        </Box>

        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Summary Type</InputLabel>
          <Select value={summaryType} onChange={(e) => setSummaryType(e.target.value)} label="Summary Type">
            <MenuItem value="paragraph">Paragraph</MenuItem>
            <MenuItem value="bullets">Bullet Points</MenuItem>
            <MenuItem value="key-points">Key Points</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          size="large"
          onClick={generateSummary}
          disabled={loading || !text.trim()}
          startIcon={loading ? <CircularProgress size={20} /> : <AutoAwesome />}
          sx={{
            bgcolor: '#8b5cf6',
            '&:hover': { bgcolor: '#7c3aed' },
          }}
        >
          {loading ? 'Summarizing...' : 'Generate Summary'}
        </Button>
      </Paper>

      {summary && (
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            Summary
          </Typography>
          <Card sx={{ bgcolor: '#f3f4f6', p: 2 }}>
            <CardContent>
              <Typography variant="body1">{summary}</Typography>
            </CardContent>
          </Card>
        </Paper>
      )}
    </Box>
  );
};

export default Summarizer;
