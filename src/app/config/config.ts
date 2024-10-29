
import dotenv from "dotenv";

dotenv.config();

const config = {
    googleMapsApi: {
        key: process.env.GOOGLE_MAPS_API_KEY,
    },
} as const;

export default config;