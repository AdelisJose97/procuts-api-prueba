/* import * as csv from '../lib/index.js' */

import * as fs from 'node:fs'
import { parse } from 'csv-parse'
import { DataSource } from 'typeorm'
import { Product } from '../entities/product.entity'

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'aws-0-us-west-1.pooler.supabase.com',
  port: 5432,
  username: 'postgres.wjykdqmejcztsklnneco',
  password: 'mypassword2024**/',
  database: 'postgres',
  synchronize: true,
  logging: true,
  entities: [Product],
  subscribers: [],
  migrations: [],
})

process.chdir('src/database/seed')

const readCsv = (): Promise<string[][]> =>
  new Promise((resolve, reject) => {
    const rows = []
    fs.createReadStream('data.csv')
      .pipe(parse({ delimiter: ',', from_line: 2 }))
      .on('data', function (row) {
        rows.push(row)
      })
      .on('end', function () {
        console.log('finished')
        resolve(rows)
      })
      .on('error', function (error) {
        reject(error)
      })
  })

AppDataSource.initialize()
  .then(async () => {
    const rawProducts = await readCsv()

    for (const row of rawProducts) {
      const tempProduct = new Product()
      tempProduct.handle = row[0]
      tempProduct.title = row[1]
      tempProduct.description = row[2]
      tempProduct.sku = Number(row[3])
      tempProduct.grams = Number(row[4])
      tempProduct.stock = Number(row[5])
      tempProduct.price = Number(row[6])
      tempProduct.comparePrice = Number(row[7])
      tempProduct.barCode = Number(row[8])
      await AppDataSource.manager.save(tempProduct)
    }

    console.log('All products imported to database')
  })
  .catch((error) => console.log('Error: ', error))
