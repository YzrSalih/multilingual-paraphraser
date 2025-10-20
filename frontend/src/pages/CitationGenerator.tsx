import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from '@mui/material';
import { BookmarkBorderOutlined, Create } from '@mui/icons-material';

const citationStyles = ['APA', 'MLA', 'Chicago', 'Harvard', 'IEEE'];

const CitationGenerator: React.FC = () => {
  const [sourceType, setSourceType] = useState('book');
  const [style, setStyle] = useState('APA');
  const [authors, setAuthors] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [citation, setCitation] = useState('');

  const generateCitation = () => {
    const mockCitation = `${authors} (${year}). ${title}. [Generated ${style} citation]`;
    setCitation(mockCitation);
  };

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={4}>
        <Avatar 
          sx={{ 
            background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
            mr: 2, 
            width: 56, 
            height: 56,
            boxShadow: '0 4px 14px rgba(99, 102, 241, 0.3)',
          }}
        >
          <BookmarkBorderOutlined sx={{ fontSize: 32 }} />
        </Avatar>
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Citation Tool
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Professional citation generation in multiple formats
          </Typography>
        </Box>
      </Box>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Citation Style</InputLabel>
              <Select value={style} onChange={(e) => setStyle(e.target.value)} label="Citation Style">
                {citationStyles.map((s) => (
                  <MenuItem key={s} value={s}>
                    {s}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Source Type</InputLabel>
              <Select value={sourceType} onChange={(e) => setSourceType(e.target.value)} label="Source Type">
                <MenuItem value="book">Book</MenuItem>
                <MenuItem value="journal">Journal Article</MenuItem>
                <MenuItem value="website">Website</MenuItem>
                <MenuItem value="newspaper">Newspaper</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Author(s)" value={authors} onChange={(e) => setAuthors(e.target.value)} />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField fullWidth label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Year" value={year} onChange={(e) => setYear(e.target.value)} />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          size="large"
          onClick={generateCitation}
          startIcon={<Create />}
          sx={{
            mt: 3,
            bgcolor: '#3b82f6',
            '&:hover': { bgcolor: '#2563eb' },
          }}
        >
          Generate Citation
        </Button>

        {citation && (
          <Paper elevation={1} sx={{ mt: 3, p: 3, bgcolor: '#f3f4f6' }}>
            <Typography variant="subtitle2" gutterBottom>
              Generated Citation:
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'monospace' }}>
              {citation}
            </Typography>
          </Paper>
        )}
      </Paper>
    </Box>
  );
};

export default CitationGenerator;
