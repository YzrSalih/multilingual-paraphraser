# Multilingual Academic AI Detection & Humanizer

## Overview
Academic writing tool for detecting AI-generated content and humanizing text while preserving meaning and citations across multiple languages.

## Features
- 🔍 AI Detection with percentage scoring
- 🎭 Text humanization while preserving academic integrity
- 🌍 Multi-language support (EN, DE, FR, IT, ES, PL, TR)
- 📚 Academic citation preservation
- 🎯 Semantic meaning validation

## Tech Stack
- **Backend**: FastAPI + Python
- **Frontend**: React + TypeScript
- **AI**: Google Gemini API
- **Database**: PostgreSQL
- **Queue**: Redis + Celery

## Setup

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env  # Add your API keys
uvicorn main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## Environment Variables
```
GEMINI_API_KEY=your_gemini_api_key
DATABASE_URL=postgresql://user:pass@localhost/db
REDIS_URL=redis://localhost:6379
```

## API Endpoints
- `POST /detect` - AI detection analysis
- `POST /humanize` - Text humanization
- `POST /analyze` - Full pipeline (detect + humanize)