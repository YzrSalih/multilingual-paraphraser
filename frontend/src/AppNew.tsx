import React, { useState, useEffect } from 'react';
import {
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import Sidebar from './components/Sidebar';
import AIHumanizer from './pages/AIHumanizer';
import GrammarChecker from './pages/GrammarChecker';
import PlagiarismChecker from './pages/PlagiarismChecker';
import AIChat from './pages/AIChat';
import ImageGenerator from './pages/ImageGenerator';
import Summarizer from './pages/Summarizer';
import Translator from './pages/Translator';
import CitationGenerator from './pages/CitationGenerator';
import Premium from './pages/Premium';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('humanizer');
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#10b981',
      },
      secondary: {
        main: '#ec4899',
      },
      background: {
        default: darkMode ? '#0f172a' : '#f8fafc',
        paper: darkMode ? '#1e293b' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h3: {
        fontWeight: 800,
      },
      h4: {
        fontWeight: 700,
      },
      h5: {
        fontWeight: 700,
      },
    },
    shape: {
      borderRadius: 16,
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '1rem',
          },
        },
      },
    },
  });

  const renderPage = () => {
    switch (currentPage) {
      case 'paraphraser':
      case 'humanizer':
      case 'ai-detector':
        return <AIHumanizer darkMode={darkMode} setDarkMode={setDarkMode} />;
      case 'grammar':
        return <GrammarChecker />;
      case 'plagiarism':
        return <PlagiarismChecker />;
      case 'chat':
        return <AIChat />;
      case 'image-generator':
        return <ImageGenerator />;
      case 'summarizer':
        return <Summarizer />;
      case 'translate':
        return <Translator />;
      case 'citation':
        return <CitationGenerator />;
      case 'flow':
        return <AIHumanizer darkMode={darkMode} setDarkMode={setDarkMode} />;
      case 'premium':
        return <Premium />;
      default:
        return <AIHumanizer darkMode={darkMode} setDarkMode={setDarkMode} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} darkMode={darkMode} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 4,
            ml: '200px',
            bgcolor: 'background.default',
          }}
        >
          {renderPage()}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
