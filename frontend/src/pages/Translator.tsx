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
  IconButton,
} from '@mui/material';
import { GTranslate, SwapHoriz } from '@mui/icons-material';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'it', name: 'Italiano' },
  { code: 'es', name: 'Español' },
  { code: 'pl', name: 'Polski' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'ar', name: 'العربية' },
  { code: 'zh', name: '中文' },
  { code: 'ja', name: '日本語' },
];

const Translator: React.FC = () => {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('tr');
  const [loading, setLoading] = useState(false);

  const translate = async () => {
    setLoading(true);
    setTimeout(() => {
      setTranslatedText('Translated text will appear here. Integrate with Google Translate API or Gemini.');
      setLoading(false);
    }, 1000);
  };

  const swapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={4}>
        <Avatar 
          sx={{ 
            background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
            mr: 2, 
            width: 56, 
            height: 56,
            boxShadow: '0 4px 14px rgba(6, 182, 212, 0.3)',
          }}
        >
          <GTranslate sx={{ fontSize: 32 }} />
        </Avatar>
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Language Bridge
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Neural translation across multiple languages
          </Typography>
        </Box>
      </Box>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={5}>
            <FormControl fullWidth>
              <InputLabel>From</InputLabel>
              <Select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)} label="From">
                {languages.map((lang) => (
                  <MenuItem key={lang.code} value={lang.code}>
                    {lang.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2} display="flex" justifyContent="center" alignItems="center">
            <IconButton onClick={swapLanguages} color="primary">
              <SwapHoriz />
            </IconButton>
          </Grid>
          <Grid item xs={5}>
            <FormControl fullWidth>
              <InputLabel>To</InputLabel>
              <Select value={targetLang} onChange={(e) => setTargetLang(e.target.value)} label="To">
                {languages.map((lang) => (
                  <MenuItem key={lang.code} value={lang.code}>
                    {lang.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              multiline
              rows={10}
              label="Source Text"
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
              placeholder="Enter text to translate..."
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              multiline
              rows={10}
              label="Translated Text"
              value={translatedText}
              variant="outlined"
              InputProps={{ readOnly: true }}
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          size="large"
          onClick={translate}
          disabled={loading || !sourceText.trim()}
          startIcon={loading ? <CircularProgress size={20} /> : <GTranslate />}
          sx={{
            mt: 3,
            bgcolor: '#06b6d4',
            '&:hover': { bgcolor: '#0891b2' },
          }}
        >
          {loading ? 'Translating...' : 'Translate'}
        </Button>
      </Paper>
    </Box>
  );
};

export default Translator;
