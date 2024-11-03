// pages/api/videos.ts
import type { NextApiRequest, NextApiResponse } from "next";
import config from "@/app/config/config";
import { UniBandConfig } from "@/config";

const API_KEY = config.youtube.apiKey;
const CHANNEL_ID = UniBandConfig.youTubeChannelId;
const MAX_RESULTS = 100;
const ORDER = "date";
const TYPE = "video";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${MAX_RESULTS}&order=${ORDER}&type=${TYPE}&key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch videos");
    }

    const data = await response.json();
    res.status(200).json(data.items);
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).json({ error: "Failed to fetch videos" });
  }
}
