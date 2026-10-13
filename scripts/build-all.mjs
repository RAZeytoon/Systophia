// ساخت هر دو نسخه‌ی سایت: فارسی در public/ و انگلیسی در public/en/
// استفاده: node scripts/build-all.mjs
import { spawnSync } from "node:child_process"
import { existsSync } from "node:fs"

function run(args, env = {}) {
  const r = spawnSync(`npx quartz build ${args.join(" ")}`, {
    stdio: "inherit",
    shell: true,
    env: { ...process.env, ...env },
  })
  if (r.status !== 0) process.exit(r.status ?? 1)
}

// ۱) فارسی (محتوای content/ به public/)
run(["-o", "public"])

// ۲) انگلیسی (محتوای content-en/ به public/en/)، فقط اگر پوشه‌اش وجود داشته باشد
if (existsSync("content-en")) {
  run(["-d", "content-en", "-o", "public/en"], { QUARTZ_LANG: "en" })
}
