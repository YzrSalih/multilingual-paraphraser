import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import { ForumOutlined, Send, SmartToy, Person } from '@mui/icons-material';
import axios from 'axios';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Mock AI response - gerçek API entegrasyonu için backend endpoint eklenebilir
      setTimeout(() => {
        const aiMessage: Message = {
          role: 'assistant',
          content: 'This is a mock AI response. Integrate with Gemini API for real conversations.',
        };
        setMessages((prev) => [...prev, aiMessage]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={4}>
        <Avatar 
          sx={{ 
            background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
            mr: 2, 
            width: 56, 
            height: 56,
            boxShadow: '0 4px 14px rgba(14, 165, 233, 0.3)',
          }}
        >
          <ForumOutlined sx={{ fontSize: 32 }} />
        </Avatar>
        <Box>
          <Typography variant="h4" fontWeight={700}>
            AI Assistant
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Intelligent conversation for academic support and writing help
          </Typography>
        </Box>
      </Box>

      <Paper elevation={3} sx={{ p: 3, height: '60vh', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ flexGrow: 1, overflowY: 'auto', mb: 2 }}>
          {messages.map((message, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                mb: 2,
              }}
            >
              <Card
                sx={{
                  maxWidth: '70%',
                  bgcolor: message.role === 'user' ? '#3b82f6' : '#f3f4f6',
                  color: message.role === 'user' ? 'white' : 'black',
                }}
              >
                <CardContent sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                  <Avatar sx={{ bgcolor: message.role === 'user' ? '#2563eb' : '#10b981' }}>
                    {message.role === 'user' ? <Person /> : <SmartToy />}
                  </Avatar>
                  <Typography variant="body1">{message.content}</Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type your message..."
            variant="outlined"
          />
          <IconButton
            color="primary"
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            sx={{
              bgcolor: '#3b82f6',
              color: 'white',
              '&:hover': { bgcolor: '#2563eb' },
            }}
          >
            <Send />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default AIChat;
