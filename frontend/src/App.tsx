import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Alert,
  CircularProgress,
  Chip
} from '@mui/material';
import {
  Psychology,
  AutoFixHigh,
  Analytics,
  School,
  Language
} from '@mui/icons-material';
import axios from 'axios';

interface AIDetectionResult {
  ai_probability: number;
  confidence: number;
  analysis: string;
  flagged_sentences: string[];
}

interface HumanizedResult {
  original_text: string;
  humanized_text: string;
  changes_made: string[];
  meaning_preservation_score: number;
  citations_preserved: boolean;
}

interface FullAnalysisResult {
  detection: AIDetectionResult;
  humanized: HumanizedResult;
}

const languages = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'it', name: 'Italiano' },
  { code: 'es', name: 'Español' },
  { code: 'pl', name: 'Polski' },
  { code: 'tr', name: 'Türkçe' }
];

function App() {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('en');
  const [preserveCitations, setPreserveCitations] = useState(true);
  const [academicLevel, setAcademicLevel] = useState('university');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FullAnalysisResult | null>(null);
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    if (!text.trim()) {
      setError('Please enter some text to analyze');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await axios.post('/analyze', {
        text,
        language,
        preserve_citations: preserveCitations,
        academic_level: academicLevel
      });

      setResult(response.data);
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Analysis failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getAIProbabilityColor = (probability: number) => {
    if (probability < 30) return 'success';
    if (probability < 70) return 'warning';
    return 'error';
  };

  const getAIProbabilityText = (probability: number) => {
    if (probability < 30) return 'Likely Human-Written';
    if (probability < 70) return 'Possibly AI-Generated';
    return 'Likely AI-Generated';
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          <School sx={{ fontSize: 'inherit', mr: 2 }} />
          Academic AI Humanizer
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Detect and humanize AI-generated academic content across multiple languages
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Input Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              <Psychology sx={{ mr: 1 }} />
              Text Analysis
            </Typography>

            <TextField
              fullWidth
              multiline
              rows={12}
              label="Enter your academic text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your thesis, research paper, or academic content here..."
              variant="outlined"
              sx={{ mb: 3 }}
            />

            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Language</InputLabel>
                  <Select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    label="Language"
                  >
                    {languages.map((lang) => (
                      <MenuItem key={lang.code} value={lang.code}>
                        <Language sx={{ mr: 1 }} />
                        {lang.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Academic Level</InputLabel>
                  <Select
                    value={academicLevel}
                    onChange={(e) => setAcademicLevel(e.target.value)}
                    label="Academic Level"
                  >
                    <MenuItem value="high_school">High School</MenuItem>
                    <MenuItem value="university">University</MenuItem>
                    <MenuItem value="phd">PhD/Graduate</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <FormControlLabel
              control={
                <Switch
                  checked={preserveCitations}
                  onChange={(e) => setPreserveCitations(e.target.checked)}
                />
              }
              label="Preserve Citations & References"
              sx={{ mb: 3 }}
            />

            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handleAnalyze}
              disabled={loading || !text.trim()}
              startIcon={loading ? <CircularProgress size={20} /> : <Analytics />}
            >
              {loading ? 'Analyzing...' : 'Analyze & Humanize'}
            </Button>

            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}
          </Paper>
        </Grid>

        {/* Results Section */}
        <Grid item xs={12} md={6}>
          {result && (
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                <AutoFixHigh sx={{ mr: 1 }} />
                Analysis Results
              </Typography>

              {/* AI Detection Results */}
              <Card sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    AI Detection Score
                  </Typography>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Box flexGrow={1} mr={2}>
                      <LinearProgress
                        variant="determinate"
                        value={result.detection.ai_probability}
                        color={getAIProbabilityColor(result.detection.ai_probability)}
                        sx={{ height: 8, borderRadius: 4 }}
                      />
                    </Box>
                    <Typography variant="h6">
                      {result.detection.ai_probability.toFixed(1)}%
                    </Typography>
                  </Box>
                  <Chip
                    label={getAIProbabilityText(result.detection.ai_probability)}
                    color={getAIProbabilityColor(result.detection.ai_probability)}
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    Confidence: {result.detection.confidence.toFixed(1)}%
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {result.detection.analysis}
                  </Typography>
                </CardContent>
              </Card>

              {/* Humanized Text */}
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Humanized Text
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={8}
                    value={result.humanized.humanized_text}
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ mb: 2 }}
                  />
                  
                  <Typography variant="subtitle2" gutterBottom>
                    Changes Made:
                  </Typography>
                  {result.humanized.changes_made.map((change, index) => (
                    <Chip
                      key={index}
                      label={change}
                      size="small"
                      variant="outlined"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}

                  <Box mt={2}>
                    <Typography variant="body2">
                      Meaning Preservation: {result.humanized.meaning_preservation_score.toFixed(1)}%
                    </Typography>
                    <Typography variant="body2">
                      Citations Preserved: {result.humanized.citations_preserved ? 'Yes' : 'No'}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Paper>
          )}

          {!result && !loading && (
            <Paper elevation={1} sx={{ p: 4, textAlign: 'center', bgcolor: 'grey.50' }}>
              <Typography variant="h6" color="text.secondary">
                Enter text and click "Analyze & Humanize" to see results
              </Typography>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
