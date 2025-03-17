import { join } from 'node:path'
import sqlite3 from 'sqlite3'

export default function getConnection() {
  const dbFile = process.env.DB_FILE
  if (!dbFile) {
    throw new Error('Not found DB_FILE env variable')
  }
  const dbPath = join(import.meta.dirname, '..', '..', dbFile)
  try {
    if (process.env.NODE_ENV === 'development') {
      sqlite3.verbose()
    }
    return new sqlite3.Database(dbPath)
  } catch (error) {
    console.error(error)
    throw new Error('Couldn\'t establish connection with a database')
  }
}
