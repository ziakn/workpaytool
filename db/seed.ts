import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";

const dbPath = path.join(process.cwd(), "data", "workpaytools.sqlite");
const schemaPath = path.join(process.cwd(), "db", "schema.sql");

fs.mkdirSync(path.dirname(dbPath), { recursive: true });

const db = new Database(dbPath);
db.exec(fs.readFileSync(schemaPath, "utf8"));

db.prepare(
  "INSERT OR IGNORE INTO countries (slug, name, currency) VALUES (?, ?, ?)",
).run("us", "United States", "USD");

console.log(`Seeded RealSalary database at ${dbPath}`);
