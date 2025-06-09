import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import fs from 'fs';
import path from 'path';

const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];
const TOKEN_PATH = path.join(__dirname, 'token.json');

// Load client secrets from a local file.
const credentials = JSON.parse(fs.readFileSync('files/credentials/credentials.json', 'utf8'));

const { client_secret, client_id, redirect_uris } = credentials.installed;
const oAuth2Client = new OAuth2Client(client_id, client_secret, redirect_uris[0]);

// Check if we have previously stored a token.
if (fs.existsSync(TOKEN_PATH)) {
    const token = fs.readFileSync(TOKEN_PATH, 'utf8');
    oAuth2Client.setCredentials(JSON.parse(token));
} else {
    getAccessToken(oAuth2Client);
}

function getAccessToken(oAuth2Client: OAuth2Client) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    // After visiting the URL, you will get a code. Use that code to get the token.
}

export async function listImages() {
    const drive = google.drive({ version: 'v3', auth: oAuth2Client });
    const res = await drive.files.list({
        q: "mimeType='image/jpeg' or mimeType='image/png'",
        fields: 'files(id, name, webViewLink, webContentLink)',
    });
    return res.data.files;
}

export async function getImage(fileId: string) {
    const drive = google.drive({ version: 'v3', auth: oAuth2Client });
    const res = await drive.files.get({
        fileId: fileId,
        alt: 'media',
    }, { responseType: 'stream' });
    return res.data;
}