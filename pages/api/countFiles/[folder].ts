import type { NextApiRequest, NextApiResponse } from "next"
import fs from "fs"
import path from "path"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { folder } = req.query

  const filepath = process.env.NODE_ENV === "development" ? `components/${folder}` : `/components/${folder}`
  const directoryPath = path.join(process.cwd(), filepath)
  fs.readdir(directoryPath, (err: NodeJS.ErrnoException | null, files: string[]) => {
    if (err) {
      return res.status(200).json({ isError: true, message: err.message, count: -1 })
    }

    return res.status(200).json({ count: files.length - 1 }) // Return the number of files except index.ts
  })
}
