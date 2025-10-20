import React, { useState, useEffect } from 'react';
import {
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import AIHumanizer from './pages/AIHumanizer';
import GrammarChecker from './pages/GrammarChecker';
import PlagiarismChecker from './pages/PlagiarismChecker';
import AIChat from './pages/AIChat';
import ImageGenerator from './pages/ImageGenerator';
import Summarizer from './pages/Summarizer';
import Translator from './pages/Translator';
import CitationGenerator from './pages/CitationGenerator';
import Premium from './pages/Premium';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    // migrate old key if present
    const legacy = localStorage.getItem('academai.userName');
    if (legacy && !localStorage.getItem('cowrite.userName')) {
      localStorage.setItem('cowrite.userName', legacy);
      localStorage.removeItem('academai.userName');
    }
    const stored = localStorage.getItem('cowrite.userName');
    if (stored) setUserName(stored);
  }, []);

  useEffect(() => {
    if (userName) localStorage.setItem('cowrite.userName', userName);
    else localStorage.removeItem('cowrite.userName');
  }, [userName]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#6366f1', // Indigo
      },
      secondary: {
        main: '#8b5cf6', // Purple
      },
      background: {
        default: darkMode ? '#0f172a' : '#fafafa',
        paper: darkMode ? '#1e293b' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Poppins", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h3: {
        fontWeight: 800,
        letterSpacing: '-0.5px',
      },
      h4: {
        fontWeight: 700,
        letterSpacing: '-0.3px',
      },
      h5: {
        fontWeight: 700,
      },
      h6: {
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 12,
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
            borderRadius: '10px',
            padding: '10px 24px',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
          },
        },
      },
    },
  });

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} userName={userName || undefined} />;
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
        return <Home onNavigate={setCurrentPage} userName={userName || undefined} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} darkMode={darkMode} />
        {/* Top Navbar */}
        <Navbar
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          darkMode={darkMode}
          userName={userName}
          onSignIn={(name) => setUserName(name)}
          onSignOut={() => setUserName(null)}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: currentPage === 'home' ? 0 : 4,
            pt: 8, // offset for fixed navbar height
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
