# Prismany example app

### Up and running

1. Install dependencies: `npm install`
2. Remove any `./prisma/***.schema` files from for databases you don't want to test
3. Create a `.env` file at the root of the project with urls to your databases. See [.env.example](.env.example) for reference.
4. Push any schemas if you haven't already:

   ```
   npx prisma db push --schema ./prisma/yourfile.prisma
   ```

5. Generate all of your clients:
   `npx prismany generate`

6. Test it out: `npm run dev`
