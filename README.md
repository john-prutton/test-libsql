# Test Libsql

When using `pnpm install` in this repo, it results in a runtime error upon visiting `localhost:3000/`. However, when using `pnpm install --shamefully-hoist` or `npm i`, this error does not appear.

The exact same is true when deploying with `Vercel`: `pnpm i --shamefully-hoist` or `npm i` is required, otherwise the same error is thrown in Vercel build.

## Test it yourself
- Clone repo
- Run `pnpm i`
- Run `pnpm dev`
- Visit `localhost:3000/` and observe error.

- Remove `node_modules`
- Run `pnpm i --shamefully-hoist` or `npm i`
- Run `pnpm dev` or `npm run dev`
- Visit `localhost:3000/` and observe no error.

## Testing on Vercel
- To test this on Vercel, you will need to use a cloud DB. I have used a cloud, libsql db from Turso.

- To test the different install commands on Vercel, you will have to overwrite commands in the `Vercel project / Settings / General / Build & Development Settings / Install command`. Overwrite this to either `pnpm i`, `pnpm i --shamefully-hoist`, or `npm i`

### Create Turso DB
- Create account on `Turso.tech`
- Install the turso cli (Linux, macOS, WSL)
- Run `turso auth login` and login with Github
- Run `turso db create my-db`
- Run `turso db show my-db` and copy the db url to an .env file / Vercel env vars as `DATABASE_URL`
- Run `turso db tokens create my-db` and copy the JWT to an .env file / Vercel env vars as `DATABASE_AUTH_TOKEN`
- Run `pnpm db:push` to push schema to your cloud db and you should be good to go.

### Optionally insert a record into the db
- Run `pnpm db:studio`
- Add a record into the `computers` table.

#### Note: `.env.local` files are not being read by `src/lib/env.mjs`. Please use `.env` instead and be cautious.