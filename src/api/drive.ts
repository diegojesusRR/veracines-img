import { google } from "googleapis";

export default async function handler(req: any, res: any) {
    const { accessToken } = req.query;


    console.log('hola');

    if (!accessToken) {
        return res.status(400).json({ error: "Access token is required" });
    }

    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: accessToken });

    const drive = google.drive({ version: "v3", auth });

    try {
        const files = await drive.files.list();
        res.status(200).json(files.data);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}