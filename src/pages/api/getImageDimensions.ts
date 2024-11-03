import type { NextApiRequest, NextApiResponse } from "next";
import sharp from "sharp";
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import path from "path";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { imagePath } = req.query;

  if (!imagePath || typeof imagePath !== "string") {
    return res.status(400).json({ error: "Image path is required" });
  }

  try {
    const fullPath = path.join(process.cwd(), imagePath);
    const { width, height } = await sharp(fullPath).metadata();
    res.status(200).json({ width, height });
  } catch (error) {
    console.error("Error getting image dimensions:", error);
    res.status(500).json({ error: "Failed to retrieve image dimensions", message: error });
  }
}
