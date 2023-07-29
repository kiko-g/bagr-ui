import type { NextApiRequest, NextApiResponse } from "next"
import fs from "fs"
import path from "path"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { folder } = req.query

  const directoryPath = path.join(process.cwd(), `components/${folder}`)
  fs.readdir(directoryPath, (err: NodeJS.ErrnoException | null, files: string[]) => {
    if (err) {
      return res.status(500).json({ message: err.message })
    }

    return res.status(200).json({ count: files.length - 1 }) // Return the number of files except index.ts
  })
}
