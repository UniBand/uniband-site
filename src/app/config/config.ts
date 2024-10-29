
import dotenv from "dotenv";

dotenv.config();

const config = {
    googleMapsApi: {
        key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    },
    youtube: {
        apiKey: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
        channelId: process.env.NEXT_PUBLIC_CHANNEL_ID,
    },
} as const;

export default config;