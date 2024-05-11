import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  handle: string

  @Column()
  title: string

  @Column('text')
  description: string

  @Column('bigint')
  sku: number

  @Column('float')
  grams: number

  @Column()
  stock: number

  @Column('float')
  price: number

  @Column('float')
  comparePrice: number

  @Column('bigint')
  barCode: number
}
