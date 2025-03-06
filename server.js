// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { LANGUAGE_VERSIONS } = require('./constants');

const app = express();
const PORT = process.env.PORT || 5000;
const PISTON_API_URL = process.env.PISTON_API_URL;

app.use(express.json());
app.use(cors());

app.post('/execute', async (req, res) => {
  const { language, sourceCode, input } = req.body;

  try {
    const response = await axios.post(`${PISTON_API_URL}/execute`, {
      language,
      version: LANGUAGE_VERSIONS[language],
      files: [
        {
          content: sourceCode,
        },
      ],
      stdin: input,
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error executing code:', error);
    res.status(500).json({ message: 'Error executing code' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
