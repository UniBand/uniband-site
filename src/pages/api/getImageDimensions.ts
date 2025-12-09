import type { NextApiRequest, NextApiResponse } from "next";
// Use a lightweight dimension-only library instead of sharp
import sizeOf from "image-size";
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { imagePath } = req.query;

  if (!imagePath || typeof imagePath !== "string") {
    return res.status(400).json({ error: "Image path is required" });
  }

  try {
    const fullPath = path.join(process.cwd(), imagePath);
    const dims = sizeOf(fullPath) as { width?: number; height?: number } | null;
    const width = dims?.width ?? null;
    const height = dims?.height ?? null;
    if (!width || !height) {
      throw new Error("Could not determine image dimensions");
    }
    res.status(200).json({ width, height, path: fullPath });
  } catch (error) {
    console.error("Error getting image dimensions:", error);
    res
      .status(500)
      .json({ error: "Failed to retrieve image dimensions", message: error });
  }
}
