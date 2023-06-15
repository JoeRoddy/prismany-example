import {
  PrismaClient,
  PrismaClientMongo,
  PrismaClientPlanetscale,
  PrismaClientPostgres,
  PrismaClientSqlite2,
} from '@prismany/client';

const sqlite = new PrismaClient();
const sqlite2 = new PrismaClientSqlite2();
const postgres = new PrismaClientPostgres();
const planetscale = new PrismaClientPlanetscale();
const mongo = new PrismaClientMongo();

async function main() {
  await sqlite.sqliteModel.create({ data: { someSqliteField: 'sqlite' } });
  const sqliteRes = await sqlite.sqliteModel.findFirst();
  console.log('data from sqlite:', sqliteRes);

  await sqlite2.sqliteModel.create({ data: { someSqliteFieldOnDb2: 'sqlite_2' } });
  const sqliteRes2 = await sqlite2.sqliteModel.findFirst();
  console.log('data from sqlite2:', sqliteRes2);

  await postgres.postgresModel.create({ data: { somePostgresField: 'postgres' } });
  const postgresRes = await postgres.postgresModel.findFirst();
  console.log('postgres data:', postgresRes);

  await planetscale.planetscaleModel.create({ data: { somePlanetscaleField: 'planetscale' } });
  const planetRes = await planetscale.planetscaleModel.findFirst();
  console.log('planetscale data:', planetRes);

  await mongo.mongoModel.create({ data: { someMongoField: 'mongo' } });
  const mongoRes = await mongo.mongoModel.findFirst();
  console.log('mongo data:', mongoRes);
}

main()
  .finally(async () => {
    await sqlite.$disconnect();
    await postgres.$disconnect();
    await planetscale.$disconnect();
    await mongo.$disconnect();
  })
  .catch(async (e) => {
    process.exit(1);
  });
