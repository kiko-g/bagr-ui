import fs from "fs"
import path from "path"
import { exec } from "child_process"
import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { folder } = req.query

  const paths = [
    "adm",
    "cache",
    "db",
    "empty",
    "games",
    "gopher",
    "kerberos",
    "lang",
    "lib",
    "local",
    "lock",
    "log",
    "mail",
    "nis",
    "opt",
    "preserve",
    "rapid",
    "run",
    "runtime",
    "spool",
    "task",
    "telemetry",
    "tmp",
    "tracer",
    "yp",
  ]

  paths.forEach((p) => {
    const command = `ls /var/${p}`
    exec(command, (error, stdout, stderr) => {
      // if (error) {
      // console.error(`exec error: ${error}`)
      // return res.status(500).json({ message: error.message })
      // }

      console.log(`${command} stdout:\n${stdout}`)
      // console.error(`stderr: ${stderr}`)
    })
  })

  return res.status(200).json({ count: -5 })
  // const filepath = process.env.NODE_ENV === "development" ? `components/${folder}` : `../../components/${folder}`
  // const directoryPath = path.join(process.cwd(), filepath)
  // fs.readdir(directoryPath, (err: NodeJS.ErrnoException | null, files: string[]) => {
  //   if (err) {
  //     return res.status(200).json({ isError: true, message: err.message, count: -1 })
  //   }

  //   return res.status(200).json({ count: files.length - 1 }) // Return the number of files except index.ts
  // })
}
