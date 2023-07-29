import { NextApiRequest, NextApiResponse } from "next"
import fs from "fs"
import path from "path"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { filepath } = req.query
  const filepathStr = filepath as string

  try {
    // Ensure the filepath doesn't contain any '..' to prevent accessing files outside of the 'components' directory
    if (filepathStr.includes("..")) {
      res.status(400).send("Invalid filepath")
      return
    }

    const basePath = path.join(process.cwd(), "components") // Replace 'components' with the path to your components directory
    const filePath = path.join(basePath, filepathStr)

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      res.status(404).json({ message: "File not found" })
      return
    }

    const fileContent = fs.readFileSync(filePath, "utf8")
    res.status(200).send(fileContent)
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: "Error reading file" })
  }
}
