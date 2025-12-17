const express = require('express');
const https = require('https');

module.exports = function(app) {
  // Custom proxy endpoint
  app.post('/api/predict', express.json(), async (req, res) => {
    console.log('📥 Received request:', req.method, req.url);
    console.log('📦 Body:', req.body);

    const postData = JSON.stringify(req.body);
    
    const options = {
      hostname: 'tufted-brooklyn-thermodynamically.ngrok-free.dev',
      port: 443,
      path: '/predict',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
        'ngrok-skip-browser-warning': 'true',
      },
    };

    const proxyReq = https.request(options, (proxyRes) => {
      console.log('✅ Response status:', proxyRes.statusCode);
      
      // Add CORS headers
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      
      // Forward status code
      res.status(proxyRes.statusCode);
      
      let data = '';
      proxyRes.on('data', (chunk) => {
        data += chunk;
      });
      
      proxyRes.on('end', () => {
        console.log('📥 Response data:', data);
        res.send(data);
      });
    });

    proxyReq.on('error', (error) => {
      console.error('❌ Proxy error:', error);
      res.status(500).json({ error: 'Proxy error', details: error.message });
    });

    proxyReq.write(postData);
    proxyReq.end();
  });
};
