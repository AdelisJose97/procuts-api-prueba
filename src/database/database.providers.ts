import { DataSource } from 'typeorm'

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const PostgresDataSource = new DataSource({
        type: 'postgres',
        host: 'aws-0-us-west-1.pooler.supabase.com',
        port: 5432,
        username: 'postgres.wjykdqmejcztsklnneco',
        password: process.env.DATABASE_PASSWORD,
        database: 'postgres',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      })
      return PostgresDataSource.initialize()
    },
  },
]
