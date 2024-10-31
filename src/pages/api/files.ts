// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import fs from "fs";
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import path from "path";

import type { NextApiRequest, NextApiResponse } from "next";
import { UniBandConfig } from "@/config";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const galleryDir = path.join(process.cwd(), "public", UniBandConfig.galleryPath);

  try {
    const files = fs.readdirSync(galleryDir).filter((file) => {
      return /\.(jpg|jpeg|png|gif)$/i.test(file); // Filters for image files
    });

    res.status(200).json(files);
  } catch (_error) {
    res.status(500).json({ error: "Failed to read gallery directory" });
  }
}
