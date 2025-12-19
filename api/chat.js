// Vercel Serverless Function for Chat API
// This replaces setupProxy.js for production

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('💬 Chat Request received');
    console.log('💬 Request Body:', JSON.stringify(req.body, null, 2));

    const { message, session_id, language } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const requestBody = {
      message,
      session_id: session_id || null,
      language: language || 'auto',
    };

    console.log('🔗 Connecting to: https://carrivo-assistant.onrender.com/api/v1/chat');

    // Forward request to the actual API
    const response = await fetch('https://carrivo-assistant.onrender.com/api/v1/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    console.log('📡 Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API Error:', errorText);
      return res.status(response.status).json({ 
        error: 'Chat API failed', 
        details: errorText 
      });
    }

    const data = await response.json();
    console.log('✅ Response data:', data);

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    return res.status(200).json(data);

  } catch (error) {
    console.error('❌ Chat Proxy Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error', 
      details: error.message 
    });
  }
}
