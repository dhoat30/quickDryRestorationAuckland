require('dotenv').config();

const { google } = require('googleapis');
// Load credentials from the Cloud Console
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
 process.env.GOOGLE_CLIENT_SECRET, // Client Secret
  "http://localhost:3000" // Redirect URI
);

// Replace this with the actual authorization code
const code = decodeURIComponent("4/0AQSTgQGnGn3ozHpixBTaWRWS6xWxrhPXuZAoe0V6YnqtvSWX0dL1LQTmLSW1xuOZ76y78w");

async function getTokens() {
  try {
    const { tokens } = await oauth2Client.getToken(code);
    console.log('Tokens:', tokens);
    // Save the refresh token securely for future use
  } catch (error) {
    console.error('Error retrieving tokens:', error);
  }
}

getTokens();

console.log("google client id", process.env.GOOGLE_CLIENT_ID)