import Database from "better-sqlite3";

export function GET() {
  const db = new Database(":memory:");
  const result = db.prepare("select 'ok' as status").get();
  db.close();

  return Response.json({
    app: "WorkPayTools",
    next: true,
    sqlite: result.status,
  });
}
