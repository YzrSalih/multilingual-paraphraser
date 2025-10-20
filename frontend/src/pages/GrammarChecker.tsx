import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@mui/material';
import { CheckCircleOutline, Error as ErrorIcon, CheckCircle } from '@mui/icons-material';
import axios from 'axios';

interface GrammarError {
  type: string;
  message: string;
  suggestion: string;
  position: number;
}

const GrammarChecker: React.FC = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<GrammarError[]>([]);
  const [correctedText, setCorrectedText] = useState('');

  const checkGrammar = async () => {
    setLoading(true);
    try {
      // Mock grammar check - gerçek API entegrasyonu için backend endpoint eklenebilir
      setTimeout(() => {
        const mockErrors: GrammarError[] = [
          {
            type: 'Spelling',
            message: 'Possible spelling mistake found',
            suggestion: 'correction',
            position: 10,
          },
        ];
        setErrors(mockErrors);
        setCorrectedText(text);
        setLoading(false);
      }, 1500);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={4}>
        <Avatar 
          sx={{ 
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            mr: 2, 
            width: 56, 
            height: 56,
            boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)',
          }}
        >
          <CheckCircleOutline sx={{ fontSize: 32 }} />
        </Avatar>
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Grammar Check
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Intelligent grammar, spelling, and punctuation correction
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
          placeholder="Type or paste your text here to check for grammar mistakes..."
          variant="outlined"
          sx={{ mb: 3 }}
        />

        <Button
          variant="contained"
          size="large"
          onClick={checkGrammar}
          disabled={loading || !text.trim()}
          startIcon={loading ? <CircularProgress size={20} /> : <CheckCircle />}
          sx={{
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            '&:hover': { 
              background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
            },
          }}
        >
          {loading ? 'Analyzing...' : 'Check Grammar'}
        </Button>
      </Paper>

      {errors.length > 0 && (
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            Found {errors.length} issue(s)
          </Typography>
          <List>
            {errors.map((error, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <ErrorIcon color="error" />
                </ListItemIcon>
                <ListItemText
                  primary={error.message}
                  secondary={`Suggestion: ${error.suggestion}`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default GrammarChecker;
