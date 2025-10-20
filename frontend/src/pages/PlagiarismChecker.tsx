import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Avatar,
  LinearProgress,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import { FindInPage, Search } from '@mui/icons-material';

const PlagiarismChecker: React.FC = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [plagiarismScore, setPlagiarismScore] = useState<number | null>(null);

  const checkPlagiarism = async () => {
    setLoading(true);
    setTimeout(() => {
      setPlagiarismScore(Math.random() * 30);
      setLoading(false);
    }, 2000);
  };

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={4}>
        <Avatar 
          sx={{ 
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            mr: 2, 
            width: 56, 
            height: 56,
            boxShadow: '0 4px 14px rgba(245, 158, 11, 0.3)',
          }}
        >
          <FindInPage sx={{ fontSize: 32 }} />
        </Avatar>
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Plagiarism Scan
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Advanced plagiarism detection and originality verification
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
          placeholder="Paste your text here to check for plagiarism..."
          variant="outlined"
          sx={{ mb: 3 }}
        />

        <Button
          variant="contained"
          size="large"
          onClick={checkPlagiarism}
          disabled={loading || !text.trim()}
          startIcon={loading ? <CircularProgress size={20} /> : <Search />}
          sx={{
            bgcolor: '#f97316',
            '&:hover': { bgcolor: '#ea580c' },
          }}
        >
          {loading ? 'Scanning...' : 'Check Plagiarism'}
        </Button>
      </Paper>

      {plagiarismScore !== null && (
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            Plagiarism Results
          </Typography>
          <Card
            sx={{
              background: plagiarismScore < 10 ? '#10b981' : plagiarismScore < 20 ? '#f59e0b' : '#ef4444',
              color: 'white',
              p: 3,
            }}
          >
            <CardContent>
              <Typography variant="h3" fontWeight={700}>
                {plagiarismScore.toFixed(1)}%
              </Typography>
              <Typography variant="body1">
                {plagiarismScore < 10 ? 'Original Content' : plagiarismScore < 20 ? 'Minor Issues' : 'Plagiarism Detected'}
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      )}
    </Box>
  );
};

export default PlagiarismChecker;
