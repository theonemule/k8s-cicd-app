const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 8080;
const ENVIRONMENT = process.env.ENVIRONMENT || 'unknown';

let requestCount = 0;

app.get('/', (req, res) => {
  requestCount++;
  res.json({
    message: 'Hello from DevOps on AKS!',
    hostname: os.hostname(),
    environment: ENVIRONMENT,
    version: '1.0.0',
    requestCount: requestCount,
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.get('/ready', (req, res) => {
  res.json({ status: 'ready' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${ENVIRONMENT} environment`);
});
