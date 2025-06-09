'use client'

import { SessionProvider, useSession } from "next-auth/react";
import { useState } from "react";

declare module "next-auth" {
    interface Session {
        accessToken?: string;
    }
}

function DriveFiles() {
    const { data: session } = useSession();
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    const fetchFiles = async () => {
        if (!session || !session.accessToken) return;

        const res = await fetch(`/api/drive?accessToken=${session.accessToken}`);
        const data = await res.json();

        if (data.files && data.files.length > 0) {
            const file = data.files[0]; // Assuming you want the first file
            setImageSrc(file.webContentLink);
        }
    };

    return (
        <div>
            <button onClick={fetchFiles}>Fetch Drive Files</button>
            {imageSrc && <img src={imageSrc} alt="Drive File" />}
        </div>
    );
}

export default function App() {
    return (
        <SessionProvider>
            <DriveFiles />
        </SessionProvider>
    );
}