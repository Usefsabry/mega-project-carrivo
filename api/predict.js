// Vercel Serverless Function for Prediction API
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
    console.log('📥 Prediction Request received');
    console.log('📦 Request Body:', JSON.stringify(req.body, null, 2));

    const { answers } = req.body;

    if (!answers) {
      return res.status(400).json({ error: 'Answers are required' });
    }

    const requestBody = { answers };

    console.log('🔗 Connecting to: https://web-production-ae171.up.railway.app/predict');

    // Forward request to the actual API
    const response = await fetch('https://web-production-ae171.up.railway.app/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
      body: JSON.stringify(requestBody),
    });

    console.log('📡 Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API Error:', errorText);
      return res.status(response.status).json({ 
        error: 'Prediction API failed', 
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
    console.error('❌ Prediction Proxy Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error', 
      details: error.message 
    });
  }
}
