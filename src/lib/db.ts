import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";

const dataDir = path.join(process.cwd(), "data");
const dbPath = process.env.SQLITE_PATH ?? path.join(dataDir, "workpaytools.sqlite");

declare global {
  var workpaytoolsDb: Database.Database | undefined;
}

function openDatabase() {
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });

  const db = new Database(dbPath);
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");

  db.exec(`
    CREATE TABLE IF NOT EXISTS app_meta (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);

  return db;
}

export function getDb() {
  globalThis.workpaytoolsDb ??= openDatabase();
  return globalThis.workpaytoolsDb;
}

export function getDbPath() {
  return dbPath;
}
