import { getDb, getDbPath } from "@/lib/db";

export const runtime = "nodejs";

export function GET() {
  const db = getDb();

  db.prepare(
    `
    INSERT INTO app_meta (key, value, updated_at)
    VALUES (?, ?, CURRENT_TIMESTAMP)
    ON CONFLICT(key) DO UPDATE SET
      value = excluded.value,
      updated_at = CURRENT_TIMESTAMP
  `,
  ).run("sqlite_status", "ok");

  const row = db
    .prepare(
      "SELECT key, value, updated_at AS updatedAt FROM app_meta WHERE key = ?",
    )
    .get("sqlite_status");

  return Response.json({
    ok: true,
    database: getDbPath(),
    row,
  });
}
