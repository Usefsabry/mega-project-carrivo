# 🚀 Carrivo - Career Guidance Platform

## 📋 Deployment Guide for Vercel

### ✅ Prerequisites
- GitHub account
- Vercel account (sign up at vercel.com)
- Project pushed to GitHub

### 🔧 Deployment Steps

#### 1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

#### 2. **Deploy to Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect it's a Create React App
5. Click "Deploy"

#### 3. **Verify Deployment**
After deployment, test these endpoints:
- ✅ Main site: `https://your-app.vercel.app`
- ✅ Chat API: `https://your-app.vercel.app/api/chat`
- ✅ Prediction API: `https://your-app.vercel.app/api/predict`

---

## 🔍 How It Works

### Local Development
- Uses `setupProxy.js` for API proxying
- Runs on `http://localhost:3000`

### Production (Vercel)
- Uses Vercel Serverless Functions in `/api` folder
- `api/chat.js` → Handles chatbot requests
- `api/predict.js` → Handles career prediction
- `vercel.json` → Routes configuration

---

## 🛠️ API Endpoints

### Chat API
**Endpoint:** `/api/chat`
**Method:** POST
**Body:**
```json
{
  "message": "ازاي اتعلم برمجة ويب؟",
  "session_id": "optional-session-id",
  "language": "auto"
}
```

### Prediction API
**Endpoint:** `/api/predict`
**Method:** POST
**Body:**
```json
{
  "answers": [1, 2, 3, 4, 5, ...]
}
```

---

## 🐛 Troubleshooting

### ChatBot not working after deployment?
1. Check Vercel Function Logs:
   - Go to Vercel Dashboard → Your Project → Functions
   - Click on `chat.js` to see logs
2. Verify the external API is accessible:
   - Test: `https://carrivo-assistant.onrender.com/api/v1/chat`
3. Check CORS settings in `api/chat.js`

### Prediction not working?
1. Check Vercel Function Logs for `predict.js`
2. Verify Railway API is up:
   - Test: `https://web-production-ae171.up.railway.app/predict`

---

## 📁 Project Structure
```
carrivo/
├── api/                    # Vercel Serverless Functions
│   ├── chat.js            # Chat API proxy
│   └── predict.js         # Prediction API proxy
├── public/                # Static files
├── src/                   # React source code
│   ├── api/              # API client functions
│   ├── components/       # React components
│   ├── pages/            # Page components
│   └── setupProxy.js     # Local dev proxy (not used in production)
├── vercel.json           # Vercel configuration
└── package.json          # Dependencies

```

---

## 🔐 Environment Variables (if needed)
If you need to add API keys or secrets:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variables (e.g., `API_KEY`, `SECRET_TOKEN`)
3. Access in serverless functions: `process.env.API_KEY`

---

## 📞 Support
For issues, check:
- Vercel Function Logs
- Browser Console (F12)
- Network Tab for API calls

---

**Built with ❤️ by Carrivo Team**
