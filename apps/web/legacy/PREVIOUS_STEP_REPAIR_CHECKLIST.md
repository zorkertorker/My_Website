# Previous-Step Best-Effort Repair Checklist

Pass 09 is non-deterministic and must not block the migration, but it is
allowed to opportunistically repair issues left by deterministic passes 01-08
before the app reaches the user.

Treat this file as a checklist, not as a reason to stop route conversion.
Fix what is clear and low-risk. Leave notes for anything ambiguous.

## Earlier Pass Notes

- rewrite-routes: emitted 1 app/ route shells.
- strip-mocha-build: merged 1 runtime dep(s) from user package.json; pinned 1 dep(s); normalized 0 dep range(s); sanitized 0 malformed dep descriptor(s); dropped 0 unparseable dep descriptor(s).
- rewrite-imports: rewrote 2 file(s).
- sqlite-to-pg: 0 tables, 0 indexes, 0 inserts; skipped 1 _mocha_migrations rows.
- asset-rewrite: 5 file(s) updated; 12 per-url + 0 base-host substitution(s); old=https://unknown.mochausercontent.com/ new=https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/aaef7702-ad60-4210-a7a6-b6f1d1e8ddc2/
- seed-users: 0 users in export.

## Best-Effort Checks

- Run `yarn workspace web typecheck` and fix clear TypeScript errors in
  generated app files under `apps/web/src/**`. Do not spend time on
  `apps/web/legacy/**` reference files.
- If typecheck/build reports missing modules, scan the app for imports and
  add or rewrite the dependency only when the usage is real.
- Inspect `apps/web/db/init.sql` and `apps/web/db/data.sql` for obvious
  SQLite syntax that would fail in Postgres, such as `AUTOINCREMENT`,
  trigger `BEGIN ... END` bodies, SQLite-only functions, or invalid
  transaction fragments.
- If a `DATABASE_URL` is available, you may run the mocha-import apply-db
  command against the generated output and fix clear SQL errors. If no
  database is available, perform static SQL cleanup only.
- Keep all repairs conservative: preserve migrated data and user-visible
  behavior, avoid broad rewrites, and prefer adding a note over guessing.
